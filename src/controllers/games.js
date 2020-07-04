const Game = require('../models/game');
const { checkCategory, getCategoriesPageHead } = require('../helpers/utils');

const ctrl = {};

ctrl.index = (req, res) => {
	res.render('index');
}

ctrl.games = (req, res) => {
	const category = req.params.category;
	const filterCategory = category;
	const categoryName = checkCategory(category);
	const pageHead = getCategoriesPageHead(category);
	res.render('games', {pageHead, filterCategory, categoryName});
}

ctrl.myCollection = (req, res) => {
	res.render('mycollection');
}

ctrl.search = (req, res) => {
	const toSearch = req.query.s;
	res.render('search', {toSearch})
}

ctrl.JSONList = async (req, res, next) => {
	const games = await Game.find().sort({_id: -1});
	res.json(games);
}

module.exports = ctrl;