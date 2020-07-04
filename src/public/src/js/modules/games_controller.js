const animations = require('./animations');
const gamesFilter = require('./games_filter');
const gamesInsert = require('./games_insert');
const htmlPartials = require('./html_partials');
let games;


module.exports = (gms, dom) => {
	/* 
	Objeto 'dom' esperado:
	dom = {
		root,
		button,
		showMoreData: {
			category,
			filter
		},
		resultsMessage (opcional)
	}
	*/

	const games = gms;
	const root = dom.root;
	const button = dom.button;
	const data = dom.showMoreData;
	const resultsMessage = dom.resultsMessage;

	const showGamesNum = 20; 
	let pagination = 0;
	let maxPagination;
	let gamesFiltered;
	/* 
		Le da una animacion al boton e inserta juegos en el DOM. Cuando termine de insertar 
		juegos le sacamos la animacion al boton. Si hay mas juegos que mostrar, muestra el boton.
		Si la paginacion llega a su limite, elimina el boton.
	*/
	const showMore = () => {
		let fadeOut = animations.fadeOutDown(button);

		gamesFiltered = gamesFilter({
			games,
			category: data.category,
			toFilter: data.filter
		})

		maxPagination = Math.ceil(gamesFiltered.length/showGamesNum);

		gamesInsert({
			root,
			gamesToInsert: gamesFiltered.slice(showGamesNum*pagination, (showGamesNum*pagination) + showGamesNum),
			html: htmlPartials.game
		})
		.then(() => {
			if(pagination < maxPagination){
				button.style.display = 'block';
				animations.fadeIn(button);
			}
		})

		pagination++;

		fadeOut.onfinish = () => {
			if(pagination === maxPagination){
				button.remove();
			}
		}

		if(gamesFiltered.length === 0 && resultsMessage !== null){
			resultsMessage.style.display = 'block';
		}
	}

	// Llamamos a showMore() por primera vez
	// Le damos un eventListener click al boton
	showMore();
	button.addEventListener('click', showMore, false);
}
