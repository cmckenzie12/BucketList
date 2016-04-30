var mongoose = require('mongoose');
var Bucketlist = mongoose.model('Bucketlist');

module.exports = (function(){
	return{
		read: function(req, res){
			Bucketlist.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		readUserList: function(req, res){
			console.log('req.params: ', req.params)

			// var query = { $or: [{created_by: req.params}, {taged: req.params}]};
			var query = {$or: []};
			name = req.params.name
			query.$or.push({created_by: name})
			query.$or.push({taged: name})

			console.log('query: ', query)
			

			Bucketlist.find(query, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},		
		create: function(req, res){
			console.log('hello from bucketlist.create: ', req.body);

			var new_item = new Bucketlist(req.body);
			new_item.save(function(err){
				if(err){
					console.log('fail to add to database!');
				}else{
					console.log('successfully added to the database');
					console.log('calling the readUserList now: ', req.body);
					req.params.name = req.body.created_by;
					module.exports.readUserList(req, res);
				}
			})


		},
		update: function(req, res){
			console.log('hello from update!', req.body._id);
			Bucketlist.update({_id:req.body._id}, {complete: true}, function(err){
				if(err){
					console.log('can\'t remove it from the DB');
				}else{
					console.log('successfully removed from the DB');
					req.params.name = req.body.created_by;
					module.exports.readUserList(req, res);
				}
			})
			// module.exports.read(req, res);
		},
		// remove: function(req, res){
		// 	console.log('hello from remove customer!', req.body._id);
		// 	Customer.remove({_id:req.body._id}, function(err){
		// 		if(err){
		// 			console.log('can\'t remove it from the DB');
		// 		}else{
		// 			console.log('successfully removed from the DB');
		// 			module.exports.read(req, res);
		// 		}
		// 	})
		// }

	}

})();

