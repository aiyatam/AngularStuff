// MODULE
/*var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    
}]);*/


// Random chicken scratch
var myApp = angular.module('angularApp', []);

myApp.controller('mainController', function($scope, $log, $filter) {
	/*$scope.name = 'Jane Doe';
	$scope.occupation = 'Coder';

	$scope.getname = function() {
		return 'John Doe';
	}*/

	/*console.log($scope);
	console.log($log);
	$log.log("Helloooo");
	$log.info("This is some info");
	$log.debug("Random debug stuff");
	$log.warn("warning!");
	$log.error("this is an error!");*/

	$scope.name = 'John';
	$scope.formattedname = $filter('uppercase')($scope.name);

	$log.info($scope.name);
	$log.info($scope.formattedname);

});
