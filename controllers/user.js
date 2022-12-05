'use strict';

const User = require('../models/user');

const controller = {

	create: async (req, res) => {
		let { name } = req.body;

		let user = new User()
		user.name = name;

		try {
			await user.save()
		} catch (e){
			return res.status(400).send({
				t:3
			});
		}

		return res.status(200).send({
			r:user
		});
	},

	addBook: async(req, res) => {
		let { content } = req.body;

		var book = {
			content: content,
			user: '638ab06b980d2e48a29a0208'
		}
		try{
			var user = await User.findOne({name: 'efer'})
		} catch (e) {
			return res.status(200).send({
				e: e
			})
		}

		user.books.push(book)

		try {
			await user.save()
		} catch (e) {
			return res.status(300).send({
				status: e
			})
		}

		return res.status(200).send({
			status: user
		});
	},

	addComentary: async(req, res) => {
		let { content } = req.body;

		var comment = {
			content: content,
			user: '638ab06b980d2e48a29a0208'
		}
		try{
			var user = await User.findOne({name: 'efer'})
		} catch (e) {
			return res.status(200).send({
				e: e
			})
		}

		user.comments.push(comment)

		try {
			await user.save()
		} catch (e) {
			return res.status(300).send({
				status: e
			})
		}

		return res.status(200).send({
			status: user
		});
	},

	addImage: async(req, res) => {
		let { content } = req.body;

		var image = {
			url: content,
			user: '638ab06b980d2e48a29a0208'
		}
		try{
			var user = await User.findOne({name: 'efer'})
		} catch (e) {
			return res.status(200).send({
				e: e
			})
		}

		user.images.push(image)

		try {
			await user.save()
		} catch (e) {
			return res.status(300).send({
				status: e
			})
		}

		return res.status(200).send({
			status: user
		});
	},

	checkingProcess: (req, res) => {
		return res.status(200).json({
			status: process.env.JWT_SECRE,
			EN: process.env.IP,
			S:__dirname
		}
		)
	}


}

module.exports = controller;