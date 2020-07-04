const responsiveController = require('./modules/responsive_controller');
const searchController = require('./modules/search_controller');
const gamesRequest = require('./modules/games_request');

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

//Controlador que muestra el spinner de progreso cuando cambiamos de página
require('./modules/changepage_controller')();
require('./modules/appinfo');

