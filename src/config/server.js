const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const routes = require('../router');

const {getStaticFilename, checkSame} = require('../helpers/utils');

const viewsPath = path.join(__dirname, '../views');
const publicPath = path.join(__dirname, '../public/dist');

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', viewsPath);

// STATIC FILES
app.use('/static', express.static(publicPath));

// GLOBAL MIDDLEWARES
app.use(helmet()) //security
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//GLOBAL METHODS AND VARIABLES MIDDLEWARE (used in pug views)
app.use((req, res, next) => {
	res.locals.currentPath = req.path;
	res.locals.getStaticFilename = getStaticFilename;
	res.locals.checkSame = checkSame;
	next();
})

// ROUTERS
routes(app);

module.exports = app;