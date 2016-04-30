myApp.controller('bucketlistController', function($scope, $routeParams, bucketlistFactory, userFactory){
	
	$scope.bucketlist = [];
	$scope.user = $routeParams;

	bucketlistFactory.getListByUser($routeParams.name, function(data){
		console.log('$routeParams.name: ', $routeParams); 
		$scope.bucketlist = data;
		console.log('BucketList: ', $scope.bucketlist)
	})

})