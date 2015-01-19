'use strict';

/**
 * @ngdoc function
 * @name 201412SoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 201412SoloApp
 */
angular.module('HReadly')
  .controller('MainCtrl', function ($scope, $http, Feeds) {
    var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fdailyjs.com%2Fatom.xml'%20and%20itemPath%3D'feed.entry'&format=json&diagnostics=true&callback=JSON_CALLBACK";
    Feeds.getFeed(url).success(function(data){
      $scope.feed = data.query.results.entry;
      console.log('$scope.feed in Main:', $scope.feed);
    });

  });
