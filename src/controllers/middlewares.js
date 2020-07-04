const middlewares = {};

middlewares.onlyFetch = (req, res, next) => {
	if(req.xhr){
		return next();
	} else {
		return next(404);
	}
}

module.exports = middlewares;