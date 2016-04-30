myApp.config(function($routeProvider){

	 $routeProvider
	 		.when('/', {
				templateUrl: './../partials/main.html',
				controller: 'userController'
	 		})
	        .when('/dashboard',{
	            templateUrl: './../partials/dashboard.html',
	            controller: 'dashboardController'
	        })
	        
	        .when('/user/:name',{
	            templateUrl: './../partials/user.html',
	            controller: 'bucketlistController'
	        })
	        
	        .otherwise({
	          redirectTo: '/'
	        });
})