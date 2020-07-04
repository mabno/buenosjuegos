const ctrl = {};
const Game = require('../models/game');
const { checkCategory } = require('../helpers/utils');

ctrl.index = async (req, res) => {
	const gameUrl = req.params.gameUrl;
	const game = await Game.findOne({url: gameUrl});
	const categoryName = checkCategory(game.category);
	game.plays++;
	game.save();
	res.render('play', {game, categoryName});
}

ctrl.like = async (req, res) => {
	const gameUrl = req.params.gameUrl;
	const game = await Game.findOne({url: gameUrl});
	game.vote.like++;
	game.vote.average = game.getAverage();
	game.save();
} 

ctrl.dislike = async (req, res) => {
	const gameUrl = req.params.gameUrl;
	const game = await Game.findOne({url: gameUrl});
	game.vote.dislike++;
	game.vote.average = game.getAverage();
	game.save();
}

module.exports = ctrl;