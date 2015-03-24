// define the reddit service

'use strict';

(function() {
  var reddit = function($http) {
    var fetchFeed = function(subreddit) {
      return $http.get('http://www.reddit.com/r/' + subreddit + '.json')
        .then(function(response) {
          return response.data.data.children;
        });
    };

    return {
      fetchFeed: fetchFeed
    }
  };

  var module = angular.module('learningApp');
  module.factory('reddit', reddit);
}());