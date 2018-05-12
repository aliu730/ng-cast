angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
    },
    bindings: {
      video: '<',
      playvideo: '<',
    },
    templateUrl: 'src/templates/videoListEntry.html' 
  });
//playvideo 