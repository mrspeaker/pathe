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
        <div>
          video:&nbsp;
          <a href={`https://www.youtube.com/watch?v=${this.state.vidId}`}>
            {this.state.vidId}
          </a>
        </div>
        <div id="player"></div>
        <div onClick={this.clicka}>Next&nbsp;&gt;&gt;</div>
      </div>
    );
  }
}

export default App;
