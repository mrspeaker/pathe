import React from 'react';
import jsonp from 'jsonp';
import qs from 'querystring';

import player from './youtubePlayer';

const { Component } = React;

const APIKEY = 'AIzaSyBf4tHbkDLYC85PNoFS35GbJIMWtm4NkHw';

class App extends Component {

  constructor (props) {
    super(props);

    const qss = qs.decode(window.location.search);
    const vid = qss['v'] || qss['?v'];
    const vidId = vid || this.randVidId();

    this.state = {
      player: null,
      title: '-',
      description: '-',
      vidId
    };

    window.addEventListener('popstate', (e) => {
      this.loadVid(e.state.vidId);
    });

    player(640, 390, null, this.stateChange.bind(this)).then(player => {
      this.setState({player});
      this.loadVid(vidId);
    });

    this.loadRandVid = this.loadRandVid.bind(this);
  }

  stateChange (state) {
    if (state.data === 0 /* ended */) {
      this.loadRandVid();
    }
  }

  randVidId () {
    return window.allVids[Math.random () * 82058 | 0];
  }

  loadVid (vidId) {
    const {player} = this.state;

    player.loadVideoById({
      videoId: vidId,
      startSeconds: 3
    });
    window.history.pushState({vidId}, vidId, `?v=${vidId}`);
    this.setState({vidId});

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${vidId}&key=${APIKEY}&part=snippet&`;
    jsonp(url, (err, data) => {
      const {title, description} = data.items[0].snippet;
      this.setState({
        title,
        description: description.replace(/\n\n/g, '\n')
      });
    });

  }

  loadRandVid () {
    this.loadVid(this.randVidId());
  }

  render () {
    return (
      <div id="app">
        <div>
          <span className="title">{this.state.title}</span> &nbsp;
          <a href={`https://www.youtube.com/watch?v=${this.state.vidId}`}>
            {this.state.vidId}
          </a>
          <span className="clicker" onClick={this.loadRandVid}>Next&nbsp;&gt;&gt;</span>
        </div>
        <div id="player"></div>
        <div>
          <span className="clicker" onClick={this.loadRandVid}>Next&nbsp;&gt;&gt;</span>
        </div>
        <div></div>
        <pre className="description">{this.state.description}</pre>
      </div>
    );
  }
}

export default App;
