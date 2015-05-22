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
		        	// create by BeanNguyen
		            .state('app', {
		                abstract: true,
		                url: '/app',
		                templateUrl: 'assets/tpl/app.html'
		            })
		            .state('app.thong-tin-tong-quan', {
		            	url: '/thong-tin-tong-quan',
		            	templateUrl: 'assets/tpl/profile.html'
		            })
<<<<<<< HEAD
		            .state('assets', {
		            	abstract: true,
		            	url: '/assets',
		            	templateUrl: 'assets/tpl/assets.html'
		            })
		            .state('assets.login', {
		            	url: '/login',
		            	templateUrl: 'assets/tpl/login.html'
		            })
		            // create by BeanNguyen
=======
		            .state('app.nap-tien', {
		            	url: '/nap-tien',
		            	templateUrl: 'assets/tpl/naptien.html'
		            })
		            .state('app.chuyen-tien', {
		            	url: '/chuyen-tien',
		            	templateUrl: 'assets/tpl/transfer.html'
		            })
		            .state('app.rut-tien', {
		            	url: '/rut-tien',
		            	templateUrl: 'assets/tpl/rut-tien.html'
		            })
		            .state('app.nap-tien-bang-the', {
		            	url: '/nap-tien-bang-the',
		            	templateUrl: 'assets/tpl/napTienTheCao.html'
		            })
>>>>>>> e4ccff8ff8da829b51919a9dc7aead2235cb439e
			}
		]
	)