const responsiveController = require('./modules/responsive_controller');
const searchController = require('./modules/search_controller');
const gamesRequest = require('./modules/games_request');
const storageData = require('./modules/storage_data');
const gamesInsert = require('./modules/games_insert');
const htmlPartials = require('./modules/html_partials');

responsiveController({
	navigation: document.querySelector('#navigation'),
	toggleButton: document.querySelector('#toggleNavButton')
})

// Solicitud de juegos al servidor
gamesRequest().then(res => {
	if(typeof res !== 'string'){
		searchController(res, {
			input: document.querySelector('#searchInput'),
			suggestionBox: document.querySelector('#suggestionBox'),
			root: document.querySelector('#searchResultsRoot'),
			moreResultsButton: document.querySelector('#showMoreResultsButton')
		});
	} else {
		console.log(res);
	}
})

const lastPlayedList = storageData.get('lastplayed') || [];
const favoritesList = storageData.get('favorites') || [];

const lastPlayedRoot = document.querySelector('#lastPlayedRoot');
const favoritesRoot = document.querySelector('#favoritesRoot');

const removeFavoriteGame = (id) => {
	for(let i = 0; i < favoritesList.length; i++){
		if(favoritesList[i].id === id){
			favoritesList.splice(i, 1);
			storageData.set('favorites', favoritesList);
		}
	}
}

setTimeout(function(){
	// Muestra los ultimos juegos que jugó el usuarios
	// En caso de que no haya ningun juego muestra un mensaje.
	gamesInsert({
		root: lastPlayedRoot,
		gamesToInsert: lastPlayedList,
		html: htmlPartials.game
	}).then(() => {
		if(lastPlayedRoot.children.length === 0){
			lastPlayedRoot.innerHTML = htmlPartials.emptyGridMsg('Aun no has jugado ningún juego');
		}
	})

	// Muestra los juegos favoritos del usuario
	// Eventos de click para poder eliminar el juego del DOM y del localstorage
	// En caso de que no haya ningun juego muestra un mensaje.
	gamesInsert({
		root: favoritesRoot,
		gamesToInsert: favoritesList,
		html: htmlPartials.deletableGame
	}).then(() => { 
		const deleteButtons = document.getElementsByClassName('delete-button');
		for(let button of deleteButtons){
			button.onclick = () => {
				removeFavoriteGame(button.dataset.id);
				button.parentNode.remove();
				showEmptyMsg();
			}
		}

		const showEmptyMsg = () => {
			if(favoritesRoot.children.length === 0){
				favoritesRoot.innerHTML = htmlPartials.emptyGridMsg('Aun no has indicado a ningún juego como favorito');
			}
		}
		showEmptyMsg();
	});
}, 1500);


//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');
