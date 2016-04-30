myApp.factory('bucketlistFactory', function($http, $location){

	var bucketlist = [];
	var factory = {};

	factory.getLists = function(callback){
		$http.get('/bucketlist').success(function(data) {
			callback(data);
		})
	}

	factory.getListByUser = function(user, callback){
		$http.get('/bucketlistByUser/' + user ).success(function(data) {
			callback(data);
		})
	}


	factory.addItem = function(new_item, callback){
		console.log('new_item: ', new_item);
		$http.post('/addItem', new_item).success(function(data) {
			callback(data);
		})
	}

	factory.toggleComplete = function(item, callback){
		console.log('Item: ', item);
		$http.post('/updateItem', item).success(function(data) {
			callback(data);
		})
	}


	return factory;

})