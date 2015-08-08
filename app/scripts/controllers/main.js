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
      "Item 1",
      "Item 2",
      "Item 3"
    ];
  });
