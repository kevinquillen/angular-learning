// define the reddit service

'use strict';

(function() {
  var reddit = function($http) {
    var fetchFeed = function(subreddit) {
      return $http.get('http://www.reddit.com/r/' + subreddit + '.json')
        .then(function(response) {
          return { items: response.data.data.children, subreddit: subreddit };
        });
    };

    return {
      fetchFeed: fetchFeed
    };
  };

  var module = angular.module('learningApp');
  module.factory('reddit', reddit);
}());