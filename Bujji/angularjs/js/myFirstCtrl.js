var myApplication = angular.module('myApp',[]);
myApplication.controller('myFirstCtrl', function($scope){
	$scope.name = 'bujjiBabu';
	$scope.show = false;
	$scope.fnShow = function(){
		$scope.show = !$scope.show;
	}
});