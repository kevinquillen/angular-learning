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
      $scope.error = 'There was an error.';
    };

    var onSubredditComplete = function(data) {
      $scope.activeFeed = data.subreddit;
      $scope.redditFeed = data.items;
    };


    // when selected, grab the data from reddit json feeds
    $scope.fetchFeed = function(subreddit) {
      reddit.fetchFeed(subreddit).then(onSubredditComplete, onError);
    };


    // set default sort order based on ranking
    $scope.feedSortOrder = '-data.score';
  });
