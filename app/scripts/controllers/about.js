'use strict';

/**
 * @ngdoc function
 * @name yoTutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoTutApp
 */
angular.module('yoTutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
