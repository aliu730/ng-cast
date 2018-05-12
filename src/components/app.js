angular.module('video-player', [])

.component('app', { 
  controller: function() {
    this.videoList = window.exampleVideoData;
    console.log(this.videoList);
  },
  templateUrl: "src/templates/app.html"

  // TODO
});
