'use strict';

/**
 * @ngdoc overview
 * @name 201412SoloApp
 * @description
 * # 201412SoloApp
 *
 * Main module of the application.
 */
angular
  .module('HReadly', [
    'HReadly.services',
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'feeds',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
