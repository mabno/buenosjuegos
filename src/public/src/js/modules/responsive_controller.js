module.exports = dom => {
	/*
		objeto 'dom' esperado:
		dom = {
			navigation,
			toggleButton
		}
	*/

	const navigation = dom.navigation;
	const toggleButton = dom.toggleButton;

	const body = document.body;


	// Evento de click que abre y cierra la navegación. Quita el scroll del body.
	toggleButton.onclick = () => {
		navigation.classList.toggle('open');
		body.classList.toggle('noscroll');
	}
}