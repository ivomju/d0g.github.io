angular.module('project', ['ngRoute']);

angular.module('project').config(function($routeProvider){

	$routeProvider
	.when('/slide1', {
		templateUrl: 'templates/slide1.html'
	})
    .otherwise({
		redirectTo: '/slide1'
	});
});