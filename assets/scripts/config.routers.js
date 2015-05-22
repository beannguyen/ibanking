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
			}
		]
	)