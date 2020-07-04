module.exports = router => {
	router.use((req, res, next) => {
		const host = req.hostname;
		if(host.indexOf('www.') === -1){
			return next();
		} else {
			let hostRedirect = host.replace('www.', '');
			return res.redirect(301, 'http://'+hostRedirect);
		}
	})
}