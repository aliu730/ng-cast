angular.module('video-player')
  .component('videoList', {
    controller: function() {
    },
    bindings: {
      videos: '<',
      playvideo: '<',
    },
    templateUrl: 'src/templates/videoList.html' 
  });
