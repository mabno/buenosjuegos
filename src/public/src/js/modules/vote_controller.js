let canVote = true;
let canAddFavorite = true;

const storageData = require('./storage_data');

const voteServerRequest = (type) => {
	let url;
	if(type === 0){
		url = '/megusta';
	} else if(type === 1){
		url = '/nomegusta';
	}

	fetch(window.location.pathname+url, {
		method: 'post',
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		}
	})
}


const checkStorageVote = (id) => {
	let vote = storageData.get(id+'_VOTE');
	if(vote !== null){
		return vote;
		canVote = false;
	}

	return false;
}

const checkStorageFavorite = (id) => {
	let isFavorite = false;
	let favoriteList = storageData.get('favorites') || []; 

	for(let game of favoriteList){
		if(game.id === id){
			isFavorite = true;
			canAddFavorite = false;
		}
	}

	return isFavorite;
}

const saveLastPlayed = (gameData) => {
	let isIntoList = false;
	let lastPlayedList = storageData.get('lastplayed') || [];
	for(let game of lastPlayedList){
		if(game.id === gameData.id){
			isIntoList = true;
		}
	}
	if(!isIntoList){
		lastPlayedList.push({
			id: gameData.id,
			url: gameData.url,
			title: gameData.title,
			vote: {average: gameData.average},
			category: gameData.category
		});
		if(lastPlayedList.length > 10){
			lastPlayedList.pop();
		}
		storageData.set('lastplayed', lastPlayedList);
	}

}


module.exports = dom => {
	/*
		Objeto 'dom' esperado:
		dom = {
			gameData,
			likeButton,
			dislikeButton,
			favoriteButton
		}
	*/

	const gameData = dom.gameData.dataset;
	const likeBtn = dom.likeButton;
	const dislikeBtn = dom.dislikeButton;
	const favoriteBtn = dom.favoriteButton;

	// Añade clases a los botones
	const activeLike = () => {
		likeBtn.classList.add('active', 'noselectable');
		dislikeBtn.classList.add('noselectable');
	}

	const activeDislike = () => {
		dislikeBtn.classList.add('active', 'noselectable');
		likeBtn.classList.add('noselectable');
	}

	const activeFavorite = () => {
		favoriteBtn.classList.add('active', 'noselectable');
	}

	// Comprueba si el usuario voto anteriormente
	const previousVote = checkStorageVote(gameData.id);
	if(previousVote === '0') {
		activeLike();
	} else if(previousVote === '1'){
		activeDislike();
	}

	//Comprueba si el usuario ya añadio el juego como favorito
	if(checkStorageFavorite(gameData.id)){
		activeFavorite();
	}

	//Si no esta en el historial, añada el juego a la coleccion 'ultimos jugados'
	saveLastPlayed(gameData);

	// Eventos de click
	likeBtn.onclick = () => {
		if(canVote){
			storageData.set(gameData.id+'_VOTE', '0');
			activeLike();
			voteServerRequest(0);
		}
	}

	dislikeBtn.onclick = () => {
		if(canVote){
			storageData.set(gameData.id+'_VOTE', '1');
			activeDislike();
			voteServerRequest(1);
		}
	}

	favoriteBtn.onclick = () => {
		if(canAddFavorite){
			let list = storageData.get('favorites') || [];
			list.push({
				id: gameData.id,
				url: gameData.url,
				title: gameData.title,
				vote: {average: gameData.average},
				category: gameData.category
			});
			storageData.set('favorites', list);
			activeFavorite();
		}
	}
}