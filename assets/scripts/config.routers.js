'use strict';

angular.module('ibanking-app')
	.run(
		['$rootScope', '$state', '$stateParams',
	        function ($rootScope,   $state,   $stateParams) {
	          	$rootScope.$state = $state;
	          	$rootScope.$stateParams = $stateParams;        
	        }
    	]
	)
	.config(
		['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider
		            .otherwise('/app/thong-tin-tong-quan');
		        $stateProvider
		            .state('app', {
		                abstract: true,
		                url: '/app',
		                templateUrl: 'assets/tpl/app.html'
		            })
		            .state('app.thong-tin-tong-quan', {
		            	url: '/thong-tin-tong-quan',
		            	templateUrl: 'assets/tpl/profile.html'
		            })
		            .state('app.nap-tien', {
		            	url: '/nap-tien',
		            	templateUrl: 'assets/tpl/naptien.html'
		            })
<<<<<<< HEAD
		            .state('app.chuyen-tien', {
		            	url: '/chuyen-tien',
		            	templateUrl: 'assets/tpl/transfer.html'
		            })
		            .state('app.rut-tien', {
		            	url: '/rut-tien',
		            	templateUrl: 'assets/tpl/rut-tien.html'
=======
		            .state('app.nap-tien-bang-the', {
		            	url: '/nap-tien-bang-the',
		            	templateUrl: 'assets/tpl/napTienTheCao.html'
>>>>>>> 7fda1db53bcf6ee10ac7f353c45cfcb5544084d8
		            })
			}
		]
	)