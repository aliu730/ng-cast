angular.module('video-player')
  .component('app', { 
    controller: function(youTube) {
      this.videolist = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.playvideo = (video) => {
        this.currentVideo = video;
      },
      this.onsearch = _.debounce((querystring) => {
        youTube.search(querystring, (data) => {
          this.currentVideo = data.data.items[0];
          this.videolist = data.data.items;
        });
      }, 500);
    },
    templateUrl: 'src/templates/app.html'
  });
  
