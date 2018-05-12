angular.module('video-player')
  .service('youTube', function(options, callback) {
    // TODO
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        query: options.query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
      },
    }).then(
      function successCallback(response) {
      
      
      }, function errorCallback(response) {
    
    
      });
  });