'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
   $scope.pagename="mainpage";
   $('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
  });
