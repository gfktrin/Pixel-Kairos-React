class Player extends React.Component {
  render() {
    return(
      <div>
        <video
          className="video-js"
          controls
          ref="player">
        </video>
      </div>
    )
  }

  componentDidMount() {
    var self = this;
    var player = window.videojs(this.refs.player, {}).ready(() => {
      player.src(JSON.parse(this.props.sources));
      player.play();
    });
  }

  componentWillUnmount() {
    this.player.dispose();
  }
}

ReactDOM.render(
  <Player sources='{"type": "video/mp4", "src": "//vjs.zencdn.net/v/oceans.mp4"}' />,
  document.getElementById('container')
);
