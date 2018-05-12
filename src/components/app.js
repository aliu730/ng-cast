angular.module('video-player', [])
  .component('app', { 
    controller: function() {
      this.videolist = window.exampleVideoData;
      this.currentvideo = window.exampleVideoData[0];
      console.log(this.currentVideo);
      this.onclick = function() {
        
      };
    },
    templateUrl: 'src/templates/app.html'
  });
