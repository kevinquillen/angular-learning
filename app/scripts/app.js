'use strict';

/**
 * @ngdoc overview
 * @name learningApp
 * @description
 * # learningApp
 *
 * Main module of the application.
 */
angular
  .module('learningApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
