angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      // this.playvideo = function () {
      //   console.log(this.video);
      // }
    },
    bindings: {
      video: '<',
      playvideo: '<',
    },
    templateUrl: 'src/templates/videoListEntry.html' 
  });
//playvideo 