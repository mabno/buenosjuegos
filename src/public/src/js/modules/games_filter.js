const normalizeStr = (str) => {
	let string = str.toLowerCase();
  	return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

const filterGames = (games, toFilter) => {
	return games.filter((el) => {
		let allWords = el.title + ' ' + el.description;
		allWords = normalizeStr(allWords);
		let regex = new RegExp(normalizeStr(toFilter));
		/*if(regex.test(allWords)){
			console.log(allWords, regex);
		}*/
		return regex.test(allWords);
	});
}

module.exports = params => {
	/*
		objeto 'params' esperado: 
		params = {
			games,
			category,
			toFilter
		}
	*/

	let games = params.games;
	const category = params.category, 
		toFilter = params.toFilter,
		from = params.from,
		to = params.to;

	if(category !== '') {
		games = games.filter((el) => el.category === category);
		games = games.sort((a, b) => {
			return b.vote.average - a.vote.average;
		})
	}

	if(toFilter !== '') {
		games = filterGames(games, toFilter);
	}

	return games;
}