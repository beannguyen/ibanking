<!DOCTYPE html>
<html ng-app="ibanking-app" ng-controller="mainController">
	<head>
		<title>{{ app.page_title }}</title>
		<link rel="stylesheet" type="text/css" href="assets/angular/plugins/bootstrap/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
	</head>
	<body>
		
		<div ui-view></div>
		<!-- JS FILES -->
		<script src='assets/js/jquery-1.11.3.min.js'></script>
		<script src='assets/angular/plugins/bootstrap/js/bootstrap.min.js'></script>
		<script src='assets/angular/angular/angular.js'></script>
		<script src='assets/angular/angular/angular-sanitize.js'></script>
		<script src='assets/angular/plugins/ui-bootstrap-tpls-0.13.0.js'></script>
		<script src='assets/angular/plugins/ui-router-master/release/angular-ui-router.min.js'></script>
		<script src='assets/angular/plugins/oclazyload/ocLazyLoad.js'></script>

		<!-- CUSTOM SCRIPT -->
		<script src='assets/scripts/app.js'></script>
		<script src='assets/scripts/config.routers.js'></script>
		<script src='assets/scripts/config.lazyload.js'></script>
		<script src='assets/scripts/main.js'></script>
		<script src='assets/angular/services/ui-load.js'></script>
		<script src='assets/scripts/controllers/login.js'></script>
	</body>
</html>