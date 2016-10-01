class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      videoDetails: 'text'
    };
  }

  render() {
    return (
      <div>
        <Nav search={this.handleInput.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} update={this.handleTitleClick.bind(this)}/>
        </div>
        <div className="col-md-7">
          <VideoDetail detail={this.state.videoDetails}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.searchYouTube({}, (data) => (
      this.setState({
        videoList: data,
        currentVideo: data[0],
        videoDetails: searchVideoDetail({id: data[0].id.videoId})
      })
    ));
  }

  handleTitleClick(video) {
    this.setState ({
      currentVideo: video,
    });

    this.props.searchVideoDetail({id: this.state.currentVideo.id.videoId}, (data) => (
      this.setState({
        videoDetails: data
      })
    ));
  }

  handleInput() {
    var searchObj = {
      query: document.getElementsByTagName('input')[0].value
    };

    setTimeout( () => { 
      this.props.searchYouTube(searchObj, (data) => (this.setState({videoList: data}))); 
    }, 500);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

