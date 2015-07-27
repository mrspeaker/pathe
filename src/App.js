import React from 'react';
import jsonp from 'jsonp';
import qs from 'querystring';

import player from './youtubePlayer';
import GoButton from './GoButton';
import InfoBox from './InfoBox';

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
    this.loadVidInfo(vidId);
  }

  loadVidInfo (vidId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${vidId}&key=${APIKEY}&part=snippet&`;
    jsonp(url, (err, data) => {

      if (data && data.items) {
        const {title, description} = data.items[0].snippet;
        this.setState({
          title,
          description: description.replace(/\n\n/g, '\n')
        });
      }
    });
  }

  loadRandVid () {
    this.loadVid(this.randVidId());
  }

  render () {
    const {title, description, vidId} = this.state;

    return (
      <div id="app">
        <div>
          <span className="title">{title}</span>&nbsp;
          <a href={`https://www.youtube.com/watch?v=${vidId}`}>{vidId}</a>
          <GoButton onClick={this.loadRandVid} />
        </div>
        <div id="player"></div>
        <div>
          <GoButton onClick={this.loadRandVid} />
        </div>
        <InfoBox content={description} />
      </div>
    );
  }
}

export default App;
