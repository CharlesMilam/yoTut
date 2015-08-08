'use strict';

/**
 * @ngdoc function
 * @name yoTutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTutApp
 */
angular.module('yoTutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
  
    ];
    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function(idx) {
      $scope.todos.splice(idx, 1);
    }
  });
