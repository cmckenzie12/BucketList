myApp.controller('userController', function($scope, $routeParams, userFactory){
	console.log('userController is loaded!')

	$scope.checkUser = function() {
		if($scope.user.name.length < 3){
			$scope.err_msg = "Name must be a minimum of 3 characters.";
		} else {
			userFactory.readUsers($scope.user, function(data) {
				console.log("**** is there any data? ", data)
			})			
		}
	} 


})