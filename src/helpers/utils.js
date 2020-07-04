const path = require('path');
const fs = require('fs');
const {SitemapStream, streamToPromise} = require('sitemap');
const Game = require('../models/game');
const staticFilesManifest = require('./json/static_manifest.json');
const categoriesPageHead = require('./json/categories_pagehead.json');



const utils = {};

// Recibe un nombre de scripts y retorna el nombre de script que corresponde a 'script_manifest.json' (generado por Gulp)
utils.getStaticFilename = (originalFilename) => {
	return staticFilesManifest[originalFilename];
}

// Comprueba si los dos primeros parametros son iguales y devuelve el tercero.
utils.checkSame = (a, b, toReturn) => {
	if(a === b){
		return toReturn;
	} else {
		return "";
	}
}

// Recibe  un parametro url de categoria y lo retorna si es valido
utils.checkCategory = category => {
	switch (category) {
		case 'accion': return 'Acción'; break;
		case 'aventura': return 'Aventura'; break;
		case 'chicas': return 'Chicas'; break;
		case 'arcade': return 'Arcade'; break;
		case 'deportes': return 'Deportes'; break;
		case 'puzzle': return 'Puzzle'; break;
		case 'carreras': return 'Carreras'; break;
		default: return undefined; break;
	}
}

// Recibe el nombre de una categoria y devuelve un objeto con valores para el HEAD de la pagina
utils.getCategoriesPageHead = category => {
	return categoriesPageHead[category];
}

// Genera un sitemap dinamicamente
utils.generateSitemap = async () => {
	const games = await Game.find({}, {url: 1});
	const gamesUrls = games.map(game => `/jugar/${game.url}`);
	const othersUrls = ['/', '/accion', '/aventura', '/chicas', '/arcade', '/deportes', '/puzzle', '/carreras'];
	const urls = othersUrls.concat(gamesUrls);

	const stream = new SitemapStream({
		hostname: 'http://buenosjuegos.site',
		changefreq: 'daily'
	})

	urls.forEach(url => stream.write({url}));
	stream.end();

	let data = await streamToPromise(stream);
	return data.toString();
	
}

// Devuelve un robot.txt
utils.getRobotTXT = () => {
	const directory = __dirname+'/txt/robot.txt';
	return new Promise((resolve, reject) => {
		fs.readFile(directory, function(err, data) {
			if(err) throw err;
			resolve(data);
		});
	});
}

module.exports = utils;
