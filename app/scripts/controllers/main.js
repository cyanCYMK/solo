'use strict';

/**
 * @ngdoc function
 * @name 201412SoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 201412SoloApp
 */
angular.module('HReadly')
  .controller('MainCtrl', function ($scope, $http, Feeds, $firebase) {
    // firebase set up for angular
    var ref = new Firebase('https://boiling-torch-2624.firebaseio.com/feeds');
    var sync = $firebase(ref);
    // var syncObject = sync.$asObject();
    // syncObject.$bindTo($scope, 'feeds');

    // $scope.feeds = sync.$asArray();
    // testing to see if it's a firebase issue. NO it's not
    $scope.feeds = [{url:'http://jzaratan.azurewebsites.net/rss/'}, {url:'http://sunnygblog.azurewebsites.net/rss/'}]
    console.log('scope.feeds:', $scope.feeds);

    $scope.newUrl = {url: 'http://'};

    $scope.addFeed = function(){
      $scope.feeds.$add($scope.newUrl);
    }

    // manually set feed url to be feed.url

    // ref.on('value', function(snapshot){
    //   // console.log(snapshot);
    // }, function(errorObject){
    //   console.log('The read failed:', errorObject.code);
    // }) 
    
  });
