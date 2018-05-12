angular.module('video-player')
  .component('app', { 
    controller: function() {
      this.videolist = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      console.log(this.currentVideo);
      this.playvideo = (video) => {
        this.currentVideo = video;
        //console.log(index)
      },
      this.onsearch = (options) => {
        // options: {
        //   query: query,
        //   maxResults: 5,
        //   key: window.YOUTUBE_API_KEY,
        //   videoEmbeddable: true,
        // };
      };
    },
    templateUrl: 'src/templates/app.html'
  });
