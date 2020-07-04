const ctrl = {};
const {generateSitemap, getRobotTXT} = require('../helpers/utils');

let sitemapData;
(async()=>{
	sitemapData = await generateSitemap()
})();

// GENERATE A NEW SITEMAP EVERY DAY
setInterval(async function(){
	sitemapData = await generateSitemap();
}, 86400000);


ctrl.sitemap = (req, res) => {
	res.header('Content-Type', 'application/xml');
	res.send(sitemapData);
}

ctrl.robotTXT = async (req, res) => {
	const text = await getRobotTXT();
	res.header('Content-Type', 'text/plain');
	res.send(text);
}

module.exports = ctrl;