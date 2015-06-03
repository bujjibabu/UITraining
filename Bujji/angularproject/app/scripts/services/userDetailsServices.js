'use strict';

angular.module('testApp').factory('userDetailsService', function() {
	var userDetails = function(data) {
		angular.extend(this, data);
	};

	userDetails.commonUserDetails=null;
	userDetails.sample=null;
	userDetails.data=null;


/*	var obj = {
		name:{};
		mobile:9533068603,
		pin:9532120
	}
	obj.name=[{}]*/


	return userDetails;
});