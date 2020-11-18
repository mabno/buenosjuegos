module.exports = async () => {
	const response = await fetch('/json/juegos', {
		method: 'get',
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		}
	})
	if(response.ok === true){
		return await response.json();
	} else {
		return 'games request http error';
	}
}