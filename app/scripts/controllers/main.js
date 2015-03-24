'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('learningApp')
  .controller('MainCtrl', function ($scope, $http, $interval, reddit) {
    $scope.subreddits = [
      'programming',
      'webdev',
      'angularjs',
      'php',
      'swift'
    ];

    var onError = function(reason) {
      $scope.error = 'There was an error: ' + reason;
    };

    var onSubredditComplete = function(data) {
      $scope.redditFeed = data;
    };

    // when selected, grab the data from reddit json feeds
    $scope.fetchFeed = function(subreddit) {
      $scope.activeFeed = subreddit;
      reddit.fetchFeed(subreddit).then(onSubredditComplete, onError);
    };

    // set default sort order based on ranking
    $scope.feedSortOrder = '-data.score';
  });
