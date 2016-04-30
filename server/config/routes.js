var bucketlist = require('./../controllers/bucketlist.js');
var user = require('./../controllers/user.js');

module.exports = function(app){
	app.get('/bucketlist', function(req, res){
		bucketlist.read(req, res);
	});

	app.get('/bucketlistByUser/:name', function(req,res){
		bucketlist.readUserList(req, res);
	})
	
	app.post('/addItem', function(req, res){
		bucketlist.create(req, res);
	});

	app.post('/updateItem', function(req, res){
		bucketlist.update(req, res);
	});

	app.get('/users', function(req, res){
		user.read(req, res);
	});

	app.post('/users', function(req, res){
		user.create(req, res);
	});

	app.get('/user/:id', function(req, res){
		user.read(req, res);
	});

	// app.post('/removeItem', function(req, res){
	// 	bucketlist.remove(req, res);
	// });
	// app.post('/deleteItem', function(req, res){
	// 	bucketlist.delete(req, res);
	// });

}