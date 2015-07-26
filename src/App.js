import React from 'react';
import jsonp from 'jsonp';
import qs from 'querystring';

import player from './youtubePlayer';

const { Component } = React;

const APIKEY = 'AIzaSyBf4tHbkDLYC85PNoFS35GbJIMWtm4NkHw';

//https://www.googleapis.com/youtube/v3/videos?id=BRtHlhORJLA&key=AIzaSyBf4tHbkDLYC85PNoFS35GbJIMWtm4NkHw&part=snippet&

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

    this.clicka = this.clicka.bind(this);
  }

  stateChange (state) {
    if (state.data === 0 /* ended */) {
      this.loadVid(this.randVidId());
    }
  }

  randVidId () {
    return window.allVids[Math.random () * 82058 | 0];
  }

  loadVid (vidId) {
    const {player} = this.state;
    player.loadVideoById({
      videoId: vidId,
      startSeconds:5
    });
    window.history.pushState({vidId}, vidId, `?v=${vidId}`);
    this.setState({vidId});

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${vidId}&key=${APIKEY}&part=snippet&`;
    jsonp(url, (err, data) => {
      let {title, description} = data.items[0].snippet;
      description = description.replace(/\n\n/g, '\n');
      this.setState({
        title,
        description
      });
    });

  }

  clicka () {
    const {player} = this.state;
    const vidId = this.randVidId();
    this.loadVid(vidId);
  }

  render () {
    return (
      <div id="app">
        <div>
          {this.state.title} &nbsp;
          <a href={`https://www.youtube.com/watch?v=${this.state.vidId}`}>
            {this.state.vidId}
          </a>
          <span className="clicker" onClick={this.clicka}>Next&nbsp;&gt;&gt;</span>
        </div>
        <div id="player"></div>
        <div>
          <span className="clicker" onClick={this.clicka}>Next&nbsp;&gt;&gt;</span>
        </div>
        <div></div>
        <pre className="description">{this.state.description}</pre>
      </div>
    );
  }
}

export default App;
