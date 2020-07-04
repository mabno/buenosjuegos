const responsiveController = require('./modules/responsive_controller');
const gamesController = require('./modules/games_controller');
const searchController = require('./modules/search_controller');
const gamesRequest = require('./modules/games_request');

const resultsMessage = document.querySelector('#resultsMessage');
if(resultsMessage !== null){
	resultsMessage.style.display = 'none';
}

responsiveController({
	navigation: document.querySelector('#navigation'),
	toggleButton: document.querySelector('#toggleNavButton')
})

// Solicitud de juegos al servidor
gamesRequest().then(res => {
	if(typeof res !== 'string'){
		gamesController(res, {
			root: document.querySelector('#root'),
			button: document.querySelector('#showMoreButton'),
			showMoreData: document.querySelector('#showMoreButton').dataset,
			resultsMessage
		});

		searchController(res, {
			input: document.querySelector('#searchInput'),
			suggestionBox: document.querySelector('#suggestionBox'),
			root: document.querySelector('#searchResultsRoot'),
			moreResultsButton: document.querySelector('#showMoreResultsButton')
		});

		document.querySelector('#preloadGames').remove();
	} else {
		console.log(res);
	}
})

//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');
