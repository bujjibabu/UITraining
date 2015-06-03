'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function ($scope,$http,userDetailsService) {
   $scope.pagename = "about page";

   $scope.myArray= 
   $http.get('../data/userdetails.json').success(function(data) {
	    $scope.userdata = data;
	    userDetailsService.commonUserDetails = angular.copy(data);
	    //console.log(userDetailsService.commonUserDetails);
	});

  });
