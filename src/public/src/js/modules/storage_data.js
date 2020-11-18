module.exports = {
	get: (name) => {
		return JSON.parse(localStorage.getItem(name));
	},
	set: (name, object) => {
		localStorage.setItem(name, JSON.stringify(object));
	}
}