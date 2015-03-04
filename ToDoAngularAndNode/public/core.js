//core.js contains all of the angular code for our app
var atamTodo = angular.module('atamTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on this page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log('Got the follow from server after calling get: ' + data);
		})
		.error(function(data){
			console.log('Error:' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
				alert('stuff');
			})
			.error(function(data) {
				console.log('Error' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}