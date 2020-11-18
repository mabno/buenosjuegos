const { Router } = require('express');
const router = Router();
const redirect = require('./redirect');

// CONTROLLERS
const { Games, Play, Other, Error, Params, Middlewares} = require('../controllers');

module.exports = app => {
	// REDIRECT www => without www (301)
	redirect(router);

	// PARAMS CONTROL
	router.param('category', Params.category);
	router.param('gameUrl', Params.game);

	// ROUTES
	router.get('/', Games.index);
	router.get('/buscar', Games.search);
	router.get('/micoleccion', Games.myCollection);
	router.get('/sitemap.xml', Other.sitemap);
	router.get('/robot.txt', Other.robotTXT);
	router.get('/:category', Games.games);
	router.get('/json/juegos', Middlewares.onlyFetch, Games.JSONList)
	router.get('/jugar/:gameUrl', Play.index);
	router.post('/jugar/:gameUrl/megusta', Middlewares.onlyFetch, Play.like);
	router.post('/jugar/:gameUrl/nomegusta', Middlewares.onlyFetch, Play.dislike);

	// 404 NOT FOUND ERROR
	router.use((req, res, next) => {
		next(404);
	});

	app.use(router);

	// ERROR HANDLER
	app.use(Error.handler);
}
