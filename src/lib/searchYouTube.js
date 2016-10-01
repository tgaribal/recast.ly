var searchYouTube = (options, callback) => {
  // TODO
  var key = options.key || YOUTUBE_API_KEY;
  var max = options.max || 5;
  var query = options.query || null;

  $.ajax({
    data: {
      key: key,
      q: query,
      part: 'snippet',
      maxResults: max
    },
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?type=video&videoEmbeddable=true',

    success: function(data) {
      console.log(data.items);
      callback(data.items);
    }, 
    error: function(error) {
      console.error(error);
    }
  });

};

window.searchYouTube = searchYouTube;
