class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      songList: this.props.data,
      currentSong: this.props.data[1]
    };
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentSong}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.songList} update={this.handleTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }

  handleTitleClick(event) {
    console.log('event: ', event);
    // this.setState ({
    //   currentSong: event
    // });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

