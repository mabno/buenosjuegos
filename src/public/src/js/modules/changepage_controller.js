const htmlPartials = require('./html_partials');

module.exports = () => {
	window.addEventListener('beforeunload', (e) => {
		document.body.appendChild(htmlPartials.changePageSpinner());
		console.log('EVENT [beforeunload]');
	})
}