'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('DashoardCtrl', function ($scope) {
   $scope.testingformctrl = "dashboard page";
   $('.carousel').carousel();
  });
