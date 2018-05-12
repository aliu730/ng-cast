angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(querystring, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: querystring || 'dogs',
          maxResults: 5,
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video',
        },
      }).then(
        function successCallback(response) {
          console.log(response);
          callback(response);
        
        }, function errorCallback(response) {
        });
    };   
  });