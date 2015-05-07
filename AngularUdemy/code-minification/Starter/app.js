var myApp = angular.module('myApp', []);

//Below we are passing the dependecies as a array so that it will survive minification
myApp.controller('mainController', [$scope, $log, function($scope, $log) {
	$log.info($scope);
}]);