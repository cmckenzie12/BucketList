myApp.controller('dashboardController', function($scope, $routeParams, bucketlistFactory, userFactory){
	$scope.bucketlist = [];
	$scope.users = [];

	userFactory.readUser(function(data) {
		$scope.user = data;
		console.log("userFactory.readUser data: ", data)
		console.log("userFactory.readUser $scope.user: ", $scope.user)
	})

	userFactory.viewUsersList(function(data){
		$scope.users = data;
		console.log('UserList: ', $scope.users)
	})

	bucketlistFactory.getListByUser($scope.user.name, function(data){
		$scope.bucketlist = data;
		console.log('BucketList: ', $scope.bucketlist)
	})

	$scope.addItem = function(){
		console.log('****addItem...')
		// if (($scope.new_item.title.length < 1 ) or ($scope.new_item.description.length < 1 )) {
		$scope.err_required = '';
		$scope.err_length = '';
		if ($scope.new_item.title == undefined || $scope.new_item.description == undefined ) {
			$scope.err_required = 'Title and Description are required';
			
		} else if ($scope.new_item.title.length < 5 ) {
			$scope.err_length = 'Title must be minimum of 5 charcters';
			
			} else if ($scope.new_item.description.length < 10 ) {
			$scope.err_length = 'Description must be minimum of 10 charcters';
			
		} else {	

		$scope.new_item.created_at = new Date();
		$scope.new_item.created_by = $scope.user.name;
		$scope.new_item.complete = 'false';
		bucketlistFactory.addItem($scope.new_item, function(data){
			$scope.bucketlist = data;
			$scope.new_item = {};
		});
		}
	}

	$scope.change = function(item){
		console.log('Item changed: ', item)
		bucketlistFactory.toggleComplete(item, function(data){
			$scope.bucketlist = data;
		});
	}



})