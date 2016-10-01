var searchYouTube = (options, callback) => {
  // TODO
  options.key = options.key || YOUTUBE_API_KEY;
  options.max = options.max || 10;
  options.query = options.query || 'cat';

  $.ajax({
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      chart: 'mostPopular'
    },
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?type=video&videoEmbeddable=true',

    success: function(data) {
      // console.log(data.items);
      callback(data.items);
    }, 
    error: function(error) {
      console.error(error);
    }
  });

};

window.searchYouTube = searchYouTube;

