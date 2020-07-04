const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
	title: String,
	description: String,
	dimensions: {
		width: Number,
		height: Number
	},
	iframe: String,
	url: String,
	vote: {
		like: Number,
		dislike: Number,
		average: Number
	},
	plays: Number,
	mobileready: Boolean,
	category: String
})


GameSchema.methods.getAverage = function(){
	let average = (this.vote.like / (this.vote.like + this.vote.dislike)) * 5;
	return Number(average.toFixed(2));
}

module.exports = model('Game', GameSchema);