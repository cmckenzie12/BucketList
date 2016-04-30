myApp.factory('userFactory', function($http, $location) {
	console.log('userFactory is loaded!')
	var factory = {};
	var thisUser = null;
 
	factory.readUsersTEST = function(user, callback) {
		console.log('user: ',user)
		thisUser = user;
		$location.path('/dashboard');
		callback(thisUser);
	}


	factory.readUsers = function(user, callback) {
		var newUser = true;
		$http.get('/users').success(function(data) {
			angular.forEach(data, function(regUser) {
				if(user.name == regUser.name) {
					console.log(user.name, "matches", regUser.name);
					newUser = false;
					thisUser = regUser
					$location.path('/dashboard');
				}	
			})          	
		// If user does not exist, create new user and redirect to dashboard
			if(newUser == true) {	
				console.log("User is new, Creating...");
				// user.bucketlist = [];
				$http.post('/users', user).success(function(data) {
					console.log("New user has been created...")
					thisUser = data;
					console.log("Getting ready to redirect to dashboard")
					$location.path('/dashboard');
					console.log("We did it???")
				})
			}
		})
		callback(thisUser);	
	}

	factory.readUser = function(callback) {
		callback(thisUser);
	}


	factory.viewUsersList = function(callback) {
		$http.get('/users').success(function(data) {
			callback(data);
		})
	}

	factory.updateUsersList = function(data, name, callback) {
		var polls = [];
		angular.forEach(data, function(poll) {
			if(poll.user_id == name._id)
				polls.push(poll);
		})
		$http.post('/user/polls/'+name._id, {polls: polls}).success(function(data) {})
	}

	return factory;
})

