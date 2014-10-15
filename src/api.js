var express = require('express');
var debug = require('debug')('api');
var BookStore = require('./BookStore');


var router = express.Router();
var bookStore = new BookStore();
bookStore.add('The Time Machine', function(){});
bookStore.add('There and Back Again', function(){});

router.route('/books')
	.get(function(req, res) {
		debug('get /books');
		bookStore.list(function(err, list) {
			res.json(list);
		});
	})
	.post(function(req, res){
		debug('post /books', req.body);
		bookStore.add(req.body.title, function(err) {
			res.json({message: 'ok'});
		});
	});

router.route('/books/:book_id')
	.get(function(req, res) {
		bookStore.get(req.params.book_id, function(err, book) {
			if (err) {
				res.status(404).json({message: 'Not found'});
			} else {
				res.json(book);
			}
			
		});
	})
	.put(function(req, res){
		console.dir(req.body);
		bookStore.update(req.params.book_id, req.body.title, function(err) {
			res.json({status: 'ok'});
		});
	})
	.delete(function(req, res) {
		bookStore.delete(req.params.book_id, function(err) {
			res.json({status: 'ok'});
		});
	});

module.exports = exports = router;