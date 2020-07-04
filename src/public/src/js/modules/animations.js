const animations = {};

const createAnim = (element, params) => {
	return element.animate(params.keyframes, params.props);
}

const keyframes = {
	fadeIn: [
		{transform: 'scale(0.6)', opacity: 0},
		{transform: 'scale(1)', opacity: 1}
	],
	fadeOutDown: [
		{transform: 'translateY(0)', opacity: 1},
		{transform: 'translateY(200px)', opacity: 0}
	],
	spin: [
		{transform: 'rotate(0deg)'},
		{transform: 'rotate(360deg)'}
	]
};

animations.fadeOutDown = (element) => {
	return createAnim(element, {
		keyframes: keyframes.fadeOutDown,
		props: {
			fill: 'both',
			easing: 'ease',
			duration: 1000,
		}
	});
}

animations.fadeIn = (element) => {
	return createAnim(element, {
		keyframes: keyframes.fadeIn,
		props: {
			fill: 'both',
			easing: 'ease',
			duration: 1000,
		}
	});
}

animations.spin = (element) => {
	return createAnim(element, {
		keyframes: keyframes.spin,
		props: {
			iterations: 'Infinity',
			easing: 'linear',
			duration: 1000
		}
	})
}

module.exports = animations;