angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<', 
    },
    controller: function() {
      // console.log(this.video)
      this.geturl = () => {
        return ('https://www.youtube.com/embed/' + this.video.id.videoId);
      };
    },
    
    templateUrl: 'src/templates/videoPlayer.html'
  });
