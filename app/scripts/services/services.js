angular.module('HReadly.services', [])

.factory('Feeds', function ($http){
  var getFeed = function(url){
    console.log('getFeed firing');
    return $http.jsonp(url)
    .error(function(data, status, headers, config){
      console.error('Error fetching feed:', data);
    });
  }

  return {
    getFeed: getFeed
  };
});