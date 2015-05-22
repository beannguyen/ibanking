'use strict';

/**
 *	CODE BY BeanNguyen | At 5.22PM
 */

App.factory('AuthenticationService', ['$rootScope', '$http', '$sanitize', function ($rootScope, $http, $sanitize) {
	var sanitizeCredential = function (credential) {
		return {
			action : 'login',
			username : $sanitize(credential.username),
			password : $sanitize(credential.password)
		}
	}
	return {
		login: function (credential) {
			console.log(sanitizeCredential(credential));
			var login = $http({url: "/server/authentication/auth.php",
					        method: "POST",
					        data: sanitizeCredential(credential)
					    });
			return login;
		}
	}
}]);

App.controller('loginController', function ($scope, AuthenticationService) {
	$scope.credential = {};

	$scope.formSubmit = function () {
		console.log($scope.credential);
		var login = AuthenticationService.login($scope.credential);
		login.success(function (response) {
			console.log(response);
		})
	};
});