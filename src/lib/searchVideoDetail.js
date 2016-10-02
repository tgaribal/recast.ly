var searchVideoDetail = (options, callback) => {
  // TODO
  options.key = options.key || YOUTUBE_API_KEY;
  options.id = options.id || 'htOroIbxiFY';

  $.ajax({
    data: {
      key: options.key,
      part: 'snippet'
    },
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos?id=' + options.id,

    success: function(data) {
      // console.log(data.items[0].snippet.description);
      callback(data.items[0].snippet);
    }, 
    error: function(error) {
      console.error(error);
    }
  });

};

window.searchVideoDetail = searchVideoDetail;

