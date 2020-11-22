module.exports = dom => {
	/*
		Objeto 'dom' esperado:
		dom = {
			fullscreenButton,
			playMobButton,
			widescreenButton,
			iframe,
			gamebox,
			otherGamesBox
		}
	*/

	const fullscreenBtn = dom.fullscreenButton;
	const playMobileBtn = dom.playMobButton;
	const widescreenBtn = dom.widescreenButton;
	const iframe = dom.iframe;
	const gamebox = dom.gamebox;
	const otherGamesBox = dom.otherGamesBox;

	const iframeWidth = Number(iframe.width);
	const iframeHeight = Number(iframe.height);

	let widescreenToggle = false;

	const resize = () => {
		if(!window.location.hash.match(/#pantalla_completa/)){
			let aspectRatio;
			if(iframeWidth > iframeHeight + 100){
				aspectRatio = iframeHeight / iframeWidth;
				iframe.style.height = (iframe.offsetWidth * aspectRatio) + 'px';
			} else {
				aspectRatio = iframeWidth / iframeHeight;
				iframe.style.height = (window.innerHeight - 50) + 'px';
				iframe.style.width = (iframe.offsetHeight * aspectRatio) + 'px';
			}
		}
	}

	fullscreenBtn.onclick = () => {
		window.location.href = '#pantalla_completa';
	}

	playMobileBtn.onclick = () => {
		window.location.href = '#pantalla_completa';
	}

	widescreenBtn.onclick = () => {
		widescreenBtn.classList.toggle('active');
		if(!widescreenToggle){
			gamebox.classList.add('widescreen')
			otherGamesBox.classList.add('widescreen')
			widescreenToggle = true;
		} else {
			gamebox.classList.remove('widescreen')
			otherGamesBox.classList.remove('widescreen')
			widescreenToggle = false;
		}

		resize();
	}

	// si la URL cambia y tiene el hash #iframe, modificamos los estilos para poner pantalla completa el iframe
	const URLchange = (e) => {
		if(e.newURL.match(/#pantalla_completa/)){
			iframe.style.display = 'block';
			iframe.style.position = 'fixed';
			iframe.style.zIndex = '5';
			iframe.style.top = '0';
			iframe.style.bottom = '0';
			iframe.style.left = '0';
			iframe.style.right = '0';
			iframe.style.width = '100%';
			iframe.style.height = '100%';
			iframe.style.overflow = 'hidden';
			document.body.classList.add('noscroll');
		} else {
			iframe.style = null;
			document.body.classList.remove('noscroll');
			resize();
		}
	}

	window.addEventListener('resize', resize, false);
	window.addEventListener('hashchange', URLchange, false);
	resize();
	URLchange({newURL: window.location.hash});
}