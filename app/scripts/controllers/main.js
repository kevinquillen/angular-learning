'use strict';

/**
 * @ngdoc function
 * @name learningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningApp
 */
angular.module('learningApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.subreddits = [
      'programming',
      'webdev',
      'angularjs',
      'php'
    ];

    var onUserComplete = function(response) {
      $scope.githubUser = response.data;
    };

    var onError = function(reason) {
      $scope.error = 'There was an error.';
    };

    var onSubredditComplete = function(response) {
      $scope.redditFeed = response.data.data.children;
    };

    $scope.fetchFeed = function(subreddit) {
      $http.get('http://www.reddit.com/r/' + subreddit + '.json')
        .then(onSubredditComplete, onError);
    };
  });
