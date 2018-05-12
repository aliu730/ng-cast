angular.module('video-player')
  .component('videoList', {
    controller: function() {
    },
    bindings: {
      videos: '<',
    },
    templateUrl: 'src/templates/videoList.html' 
  });
