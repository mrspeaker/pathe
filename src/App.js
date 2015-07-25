import React from 'react';
import player from './youtubePlayer';

const { Component } = React;

class App extends Component {

  constructor (props) {
    super(props);
    const vidId = this.randVidId();
    this.state = { player: null, vidId };
    player(640 , 390 , vidId).then(player => {
      this.setState({player});
    });

    this.clicka = this.clicka.bind(this);
  }

  randVidId () {
    return window.allVids[Math.random () * 82058 | 0];
  }

  clicka () {
    const {player} = this.state;
    const vidId = this.randVidId();
    player.loadVideoById({
      videoId: vidId,
      startSeconds:5
    });

    this.setState({vidId});
  }

  render () {
    return (
      <div>
        <div>video {this.state.vidId}</div>
        <div id="player"></div>
        <div onClick={this.clicka}>description</div>
      </div>
    );
  }
}

export default App;
