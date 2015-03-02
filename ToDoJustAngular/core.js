function TodoCtrl($scope) {
  $scope.todos = [];
  $scope.markAll = false;

  // Triggered by ng-keyup
  $scope.addTodo = function() {
      if (event.keyCode == 13 && $scope.todoText) {
          $scope.todos.push({text:$scope.todoText, done:false});
          $scope.todoText = '';
      }
  };

  // Used by ng-show
  $scope.isTodo = function() {
      return $scope.todos.length > 0;  
  }

  // Triggered by ng-dblclick
  $scope.toggleEditMode = function() {
      $(event.target).closest('li').toggleClass('editing');
  };

  $scope.editOnEnter = function (todo) {
      if (event.keyCode == 13 && todo.text) {
          $scope.toggleEditMode();
      }
  };
    
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
  
  $scope.itemText = function() {
      return ($scope.todos.length - $scope.remaining() > 1) ? "items" : "item";     
  };
      
  // ng-click directive
  $scope.toggleMarkAll = function() {
    angular.forEach($scope.todos, function(todo) {
      todo.done = $scope.markAll;
    });
  };
  
  // ng-show directive
  $scope.hasDone = function() {
    return $scope.todos.length != $scope.remaining;
  }

  // ng-click directive
  $scope.clear = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
    
}

