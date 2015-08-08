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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
