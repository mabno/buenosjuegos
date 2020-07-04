const MobileDetect = require('mobile-detect');
const mobileDevice = new MobileDetect(window.navigator.userAgent);
const htmlPartials = {};

const onlyDesktopAvailable = (mobileReady) => {
	return (mobileDevice.mobile() !== null && mobileReady === false);
}

const getPrettyCategoryName = (category) => {
	switch(category){
		case 'accion': return 'Acción'; break;
		case 'aventura': return 'Aventura'; break;
		case 'chicas': return 'Chicas'; break;
		case 'arcade': return 'Arcade'; break;
		case 'deportes': return 'Deportes'; break;
		case 'puzzle': return 'Puzzle'; break;
		case 'carreras': return 'Carreras'; break;
	}
}

const stars = (valoration) => {
	let htmlStars = '';
	for(let i = 0; i < 5; i++){
		htmlStars += (i < valoration) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
	}
	return htmlStars;
} 

htmlPartials.searchGame = (gameParams) => {
	const title = gameParams.title;
	const url = gameParams.url;
	const mobileReady = gameParams.mobileready;

	const html = () => {
		let str = '';
		if(onlyDesktopAvailable(mobileReady)){
			str += `<a class="suggestion-link noselectable" href="/jugar/${url}">
				<img class="suggestion-link__only-desktop" src="/static/img/onlydesktop.svg" alt="Disponible solo en escritorio">`;
		} else {
			str += `<a class="suggestion-link" href="/jugar/${url}">`;
		}
		
		str += `<img class="suggestion-link__img" src="https://res.cloudinary.com/buenosjuegos/image/upload/c_fill,g_center,h_150,w_150/${url}.jpg" alt="${title}" width="100" height="100">
					<span class="suggestion-link__title">${title}</span>
				</a>`;

		return str;
	};

	return html();
}

htmlPartials.game = (gameParams) => {
	const title = gameParams.title;
	const url = gameParams.url;
	const category = getPrettyCategoryName(gameParams.category);
	const valoration = Math.round(gameParams.vote.average);
	const mobileReady = gameParams.mobileready;

	const html = () => {
		let str = '';

		if(onlyDesktopAvailable(mobileReady)){
			str += `<img class="game-item__only-desktop" src="/static/img/onlydesktop.svg" alt="Disponible solo en escritorio">
					<a class="game-item__link noselectable" href="/jugar/${url}">`;
		} else {
			str += `<a class="game-item__link" href="/jugar/${url}">`
		}

		str +=  `<img class="game-item__img" src="https://res.cloudinary.com/buenosjuegos/image/upload/c_fill,g_center,h_250,w_250/${url}.jpg" alt="${title}" width="100" height="100">
				<span class="game-item__title">${title}</span>
				<div class="game-item__row">
					<span class="game-item__category">${category}</span>
					<span class="game-item__valoration">
						${stars(valoration)}
					</span>
				</div>
			</a>`;

		return str;
	};
	
	const element = document.createElement('div');
	element.className = 'game-item';
	element.innerHTML = html();

	return element;
}


htmlPartials.deletableGame = (gameParams) => {
	const id = gameParams.id;
	const title = gameParams.title;
	const url = gameParams.url;
	const category = getPrettyCategoryName(gameParams.category);
	const valoration = Math.round(gameParams.vote.average);

	const html = `
			<button class="game-item__delete delete-button" data-id="${id}"> 
				<i class="fas fa-times"></i>
			</button>
			<a class="game-item__link" href="/jugar/${url}">
				<img class="game-item__img" src="https://res.cloudinary.com/buenosjuegos/image/upload/c_fill,g_center,h_250,w_250/${url}.jpg" alt="${title}" width="100" height="100">
				<span class="game-item__title">${title}</span>
				<div class="game-item__row">
					<span class="game-item__category">${category}</span>
					<span class="game-item__valoration">
						${stars(valoration)}
					</span>
				</div>
			</a>`;
	const element = document.createElement('div');
	element.className = 'game-item';
	element.innerHTML = html;

	return element;
}

htmlPartials.emptyGridMsg = (msg) => {
	return `<p class="grid-message">
				<i class="fas fa-exclamation-circle fa-pull-left"></i>
				${msg}
			</p>`;
}

htmlPartials.changePageSpinner = () => {
	const element = document.createElement('div');
	element.className = 'changepage-spinner';
	element.innerHTML = '<div class="fas fa-spinner fa-spin"></div>';
	return element;
}

htmlPartials.gameDontAvailable = () => {
	const element = document.createElement('div');
	element.className = 'dont-available';
	element.innerHTML = `<div class="dont-available__box">
							<p class="dont-available__text">
								<i class="fas fa-exclamation-triangle fa-pull-left"></i>
								Este juego <b>solo está disponible en PC</b>, regresa desde tu computadora
							</p>
							<a class="black-border-button" href="/">Ver otros juegos</a>
						</div>`;
	return element;
}

module.exports = htmlPartials;