const responsiveController = require('./modules/responsive_controller');
const searchController = require('./modules/search_controller');
const gamesRequest = require('./modules/games_request');
const MobileDetect = require('mobile-detect');
const gameboxResize = require('./modules/gamebox_resize');
const voteController = require('./modules/vote_controller');
const randomGames = require('./modules/random_games');
const gamesInsert = require('./modules/games_insert');
const htmlPartials = require('./modules/html_partials');

responsiveController({
	navigation: document.querySelector('#navigation'),
	toggleButton: document.querySelector('#toggleNavButton')
})

gameboxResize({
	fullscreenButton: document.querySelector('#fullscreenButton'),
	playMobButton: document.querySelector('#playMobButton'),
	widescreenButton: document.querySelector('#widescreenButton'),
	iframe: document.querySelector('#iframe'),
	gamebox: document.querySelector('#gamebox'),
	otherGamesBox: document.querySelector('#otherGamesBox')
});

voteController({
	gameData: document.querySelector('#gameData'),
	likeButton: document.querySelector('#likeButton'),
	dislikeButton: document.querySelector('#dislikeButton'),
	favoriteButton: document.querySelector('#favoriteButton')
});

// Solicitud de juegos al servidor
gamesRequest().then(res => {
	if(typeof res !== 'string'){
		searchController(res, {
			input: document.querySelector('#searchInput'),
			suggestionBox: document.querySelector('#suggestionBox'),
			root: document.querySelector('#searchResultsRoot'),
			moreResultsButton: document.querySelector('#showMoreResultsButton')
		});
		gamesInsert({
			root: document.querySelector('#otherGamesRoot'),
			gamesToInsert: randomGames(res, 5),
			html: htmlPartials.game
		})
	} else {
		console.log(res);
	}
})

//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');

// Verifica si el usuario ingreso desde un móvil y si el juego no esta disponible para móvil, le muestra un aviso.
let mobileDevice = new MobileDetect(window.navigator.userAgent);
if(mobileDevice.mobile() !== null && document.querySelector('#gameData').dataset.mready === 'false'){
	document.body.appendChild(htmlPartials.gameDontAvailable());
}