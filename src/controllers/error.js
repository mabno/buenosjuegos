const ctrl = {};

ctrl.notFound = (req, res, next) => {
	res.status(404);
	res.render('err404');
}

ctrl.internalServerError = (req, res, next) => {
	res.status(505);
	res.render('err505');
}

ctrl.handler = (err, req, res, next) => {
	if(err === 404){
		return ctrl.notFound(req, res, next);
	} else{
		return ctrl.internalServerError(req, res, next);
	}
}


module.exports = ctrl;