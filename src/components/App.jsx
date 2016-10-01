class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      songList: exampleVideoData,
      currentSong: exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <Nav search={this.handleInput.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentSong}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.songList} update={this.handleTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.searchYouTube({}, (data) => (this.setState({songList: data})));
  }

  handleTitleClick(song) {
    this.setState ({
      currentSong: song
    });
  }

  handleInput() {
    var searchObj = {
      query: document.getElementsByTagName('input')[0].value
    };

    setTimeout( () => { 
      this.props.searchYouTube(searchObj, (data) => (this.setState({songList: data}))); 
    }, 500);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

