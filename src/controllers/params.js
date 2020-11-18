const { checkCategory } = require('../helpers/utils');
const Game = require('../models/game');

const params = {};

params.category = (req, res, next, category) => {
	if(checkCategory(category)){
		return next();
	} else {
		return next(404);
	}
}

params.game = async (req, res, next, game) => {
	const result = await Game.countDocuments({url: game});
	if(result === 1){
		return next();
	} else {
		return next(404);
	}	
}

module.exports = params;