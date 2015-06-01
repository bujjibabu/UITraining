'use strict';
angular.module('myApp')
  .controller('DashoardCtrl', function ($scope,$rootScope) {
  	$scope.pagename = 'Dashoard';
  	$scope.users = [{name:'bujjibabu',mobile:9533068603,pin:532459},
  	{name:'bujjibabu1',mobile:9533068603,pin:3432459},
  	{name:'bujjibabu2',mobile:95330686032,pin:34562459},
  	{name:'bujjibabu3',mobile:953306860334,pin:1232459},
  	{name:'bujjibabu4',mobile:953306860355,pin:032459},
  	{name:'bujjibabu5',mobile:95330686035,pin:53245945},
  	{name:'bujjibabu6',mobile:9533068603678,pin:5324592345},
  	{name:'bujjibabu7',mobile:953306860673,pin:53245934}];
  	$rootScope.test = 'this is form dashboard rootscope';
  });
