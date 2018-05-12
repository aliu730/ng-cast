angular.module('video-player')
  .component('app', { 
    controller: function() {
      this.videolist = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      console.log(this.currentVideo);
      this.playvideo = function() {
        // console.log("clicked");
      };
    },
    templateUrl: 'src/templates/app.html'
  });
