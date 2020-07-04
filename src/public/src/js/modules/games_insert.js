const htmlPartials = require('./html_partials');

module.exports = params => {
	/*
		objeto 'params' esperado:
		params = {
			root,
			gamesToInsert,
			html
		}
	*/
	const root = params.root;
	const gamesToInsert = params.gamesToInsert;
	const html = params.html;
	let i = 0;

	return new Promise((resolve, reject) => {
		setInterval(() => {
			if(i < gamesToInsert.length){
				root.appendChild(html(gamesToInsert[i]));
				i++;
			} else {
				resolve();
			}
		}, 100);
	})
}