/**
 * Created by Paulo on 27/04/2019.
 */
var stefanini = angular.module('stefanini',['ui.bootstrap', 'ngResource', 'ngRoute', 'ngCookies', 'ui.router', 'angularModalService',
	'ngAnimate', 'ngProgress', 'ngFileUpload']);

stefanini.config(['$stateProvider', '$urlRouterProvider', '$routeProvider', function($stateProvider, $urlRouterProvider, $routeProvider) {
	 
	$stateProvider.state('/', {
	   url: '/',
	   templateUrl : 'pages/heroi/personagem.html',
	   controller : 'personagemController',
	}).state('herois', {
	   url: '/herois',
	   templateUrl : 'pages/heroi/herois.html',
	   controller : 'heroiController',
	}).state('poderes', {
	   url: '/poderes',
	   templateUrl : 'pages/heroi/poderes.html',
	   controller : 'cadastraPoderController',
	});
	
   $urlRouterProvider.otherwise('/');
}]);