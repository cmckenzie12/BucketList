var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newUser = new User(req.body);
			console.log('user being added: ', req.body)

			newUser.save(function(err, data) {
				if(err){
					console.log("***** User Controller / create: ", err)
				}
				else{
					console.log("***** User Controller / create success: ", data)
					res.json(data)
					console.log("***** User Controller / create success: ", data)
				}
			})
		},

		read: function(req, res) {
			User.find({}, function(err, data) {
				if(err)
					console.log("***** User Controller / read: ", err)
				else
					res.json(data)
			})
		},

		readOne: function(req, res) {
			User.find({ _id: req.params.id }, function(err, data) {
				if(err)
					console.log("***** User Controller / readOne: ", err);
				else
					res.json(data);
			})
		},

		updatePolls: function(req, res) {
			console.log(req.body.poll);
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {polls: req.body.polls}},
				{new : true},
				function(err, data){
					if(err)
						console.log("***** User Controller / updatePolls: ", err)
					else
						res.json(data);
				}
			)
		},

	}
})();