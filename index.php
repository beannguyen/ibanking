<!DOCTYPE html>
<html ng-app="ibanking-app" ng-controller="mainController">
	<head>
		<title>{{ app.page_title }}</title>
		<link rel="stylesheet" type="text/css" href="assets/angular/plugins/bootstrap/css/bootstrap.css" />
	</head>
	<body>
		
		<div ui-view></div>
		<!-- JS FILES -->
		<script src='assets/angular/angular/angular.js'></script>
		<script src='assets/angular/plugins/ui-bootstrap-tpls-0.13.0.js'></script>
		<script src='assets/angular/plugins/ui-router-master/release/angular-ui-router.min.js'></script>

		<!-- CUSTOM SCRIPT -->
		<script src='assets/scripts/app.js'></script>
		<script src='assets/scripts/config.routers.js'></script>
		<script src='assets/scripts/config.lazyload.js'></script>
		<script src='assets/scripts/main.js'></script>
		<script src='assets/angular/services/ui-load.js'></script>
	</body>
</html>