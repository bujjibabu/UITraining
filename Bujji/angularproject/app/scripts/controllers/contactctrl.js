'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ContactCtrl', function ($scope,userDetailsService) {
   $scope.pagename = "contact page";

   $scope.contactUserdetails = angular.copy(userDetailsService.commonUserDetails)
  // debugger;
   //console.log('from contact controller'+$scope.contactUserdetails);
  });
