'use strict';

const mongoose = require('mongoose');
const DB = 'mongodb://localhost:27017/testing_models_deleted';
const app = require('./app');
const PORT = process.env.PORT || 2000;

mongoose.Promises = global.Promises;
mongoose.connect(DB, {useNewUrlParser:true})
	.then(() => {
		console.log(`${DB} activido`);

		app.listen(PORT, () => {
			console.log(`servidor activado`);
		})
	})
	.catch(e => console.log(e))