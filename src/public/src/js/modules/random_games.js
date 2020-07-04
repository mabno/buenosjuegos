const randomNumber = (max, randomIndexs) => {
	let random = Math.floor(Math.random() * max);
	for(let i = 0; i < randomIndexs.length; i++){
		if(randomIndexs[i] === random){
			return randomNumber(max, randomIndexs);
		}
	}

	return random;
}

module.exports = (gms, length) => {
	let randomIndexs = [];
	let randomGames = [];

	for(let i = 0; i < length; i++){
		randomIndexs[i] = randomNumber(gms.length, randomIndexs);
	}

	for(let i of randomIndexs){
		randomGames.push(gms[i]);
	}

	return randomGames;
}