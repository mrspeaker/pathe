import React from 'react';
import jsonp from 'jsonp';
import qs from 'querystring';

import constants from './constants';
import player from './youtubePlayer';
import GoButton from './GoButton';
import InfoBox from './InfoBox';

class App extends React.Component {

  constructor (props) {
    super(props);

    const qss = qs.decode(window.location.search);
    const vidId = qss['v'] || qss['?v'] || this.randVidId();

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
    return window.allVids[Math.random () * (window.allVids.length - 1) | 0];
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
    const base = 'https://www.googleapis.com/youtube/v3/videos';
    const url = `${base}?id=${vidId}&key=${constants.APIKEY}&part=snippet&`;
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
    const ytUrl = `https://www.youtube.com/watch?v=${vidId}`;

    return (
      <div id="app">
        <div>
          <span className="title">{title}</span>&nbsp;
          <a href={ytUrl}>{vidId}</a>
          <GoButton onClick={this.loadRandVid} />
        </div>
        <div id="player"></div>
        <GoButton onClick={this.loadRandVid} />
        <InfoBox content={description} />
      </div>
    );
  }
}

export default App;
