'use strict';

angular.module('ibanking-app')

.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
	$ocLazyLoadProvider.config({
		debug:  true,
        events: true,
        modules: []
	});
}]);
