'use strict';

var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');


// testing routes
router.post('/user/testing', UserController.create);
router.post('/user/testing-book', UserController.addBook);
router.post('/user/testing-comentary', UserController.addComentary);
router.post('/user/testing-image', UserController.addImage);
router.get('/user/checking', UserController.checkingProcess);

module.exports = router;
