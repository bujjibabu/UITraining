'use strict';
angular.module('myApp')
  .controller('AboutCtrl', function ($scope,$rootScope) {
  	$scope.pagename = 'About';
    console.log($rootScope.test);
    $scope.sample = $rootScope.test;

    $('#modal').modal('show');
  });
