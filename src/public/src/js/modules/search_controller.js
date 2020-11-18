const animations = require('./animations');
const gamesFilter = require('./games_filter');
const htmlPartials = require('./html_partials');

module.exports = (gms, dom) => {
	/*
		objeto 'dom' esperado:
		dom = {
			input,
			suggestionBox,
			root,
			moreResultsButton
		}
	*/
	const games = gms;
	const input = dom.input;
	const suggestionBox = dom.suggestionBox;
	const root = dom.root;
	const moreResultsButton = dom.moreResultsButton;

	let suggestionOpen = false;
	let anim = animations.fadeIn(suggestionBox);
	anim.finish();

	// Evento cuando se escribe en el input
	input.addEventListener('input', () => {
		if(input.value.length > 3){

			let filteredGames = gamesFilter({
				games,
				category: '',
				toFilter: input.value
			});

			if(filteredGames.length > 10) {
				moreResultsButton.style.display = 'block';
				moreResultsButton.onclick = () => {
					input.parentNode.submit();
				}
			} else {
				moreResultsButton.style.display = 'none';
			}

			filteredGames = filteredGames.slice(0, 10);

			if(filteredGames.length > 0 && !suggestionOpen){
				root.innerHTML = '';
				for(game of filteredGames) {
					root.innerHTML += htmlPartials.searchGame({
						title: game.title,
						url: game.url,
						mobileready: game.mobileready
					})
				}
				suggestionBox.style.display = 'block';
				anim.playbackRate = 1;
				anim.play();
				suggestionOpen = true;
			}
			
		} else if(suggestionOpen){
			anim.playbackRate = -1;
			anim.onfinish = function(evt){
				suggestionBox.style.display = null;
				suggestionOpen = false;
				anim.onfinish = () => {};
			}
		}
	})
}