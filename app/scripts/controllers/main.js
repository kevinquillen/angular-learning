'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('learningApp')
  .controller('MainCtrl', function ($scope, $http, $interval, $anchorScroll, $location, reddit) {
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
      $scope.redditFeed = data;
    };

    var decrementCountdown = function() {
      if ($scope.countdown > 0) {
        $scope.countdown -= 1;
      }
    };

    var startCountdown = function() {
      $scope.counting = $interval(decrementCountdown, 1000, $scope.countdown).then(onCountdownComplete, onError);
    };

    var onCountdownComplete = function() {
      if (!$scope.activeFeed) {
        reddit.fetchFeed($scope.subreddits[Math.floor(Math.random() * ($scope.subreddits.length - 1))]).then(onSubredditComplete, onError);
      }
    };

    // when selected, grab the data from reddit json feeds
    $scope.fetchFeed = function(subreddit) {
      // set the active/selected sub
      $scope.activeFeed = subreddit;

      reddit.fetchFeed(subreddit).then(onSubredditComplete, onError);

      // cancel counting
      if ($scope.counting) {
        $interval.cancel(decrementCountdown);
        $scope.countdown = null;
      }

      $location.hash('feed-result');
      $anchorScroll('feed-result');
    };


    // set default sort order based on ranking
    $scope.feedSortOrder = '-data.score';

    $scope.countdown = 5;
    $scope.counting = null;

    startCountdown();
  });
