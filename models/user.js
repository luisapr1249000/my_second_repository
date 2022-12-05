'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = Schema({
	content: {
		type:String,
		required: true
	},
	date: {
		type: Date,	
		default: Date.now
	},
	user: {type: Schema.ObjectId,}
})

const ImageSchema = Schema({
	url: String,
	date: {
		type: Date, default: Date.now
	},
});


const UserSchema = Schema({
	name: {
		type: String
	},
	books: [BookSchema],
	images: [ImageSchema],
	comments: [{
		content: {
			type: String,
			required: true
		},
		date: {
			type: Date,	
			default: Date.now
		},
		user: {
			type: Schema.ObjectId,
			ref: 'User'
		}
	}]
});


const User = mongoose.model('User', UserSchema);

module.exports = User;