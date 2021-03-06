var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	imgPath: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Product', productSchema);