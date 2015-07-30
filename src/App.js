import React from 'react';
import jsonp from 'jsonp';
import qs from 'querystring';
import Rx from 'rx';

import constants from './constants';
import player from './youtubePlayer';
import Nav from './Nav';
import InfoBox from './InfoBox';

import rand from './rand';
const randVids = rand(window.allVids);

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      player: player(640, 390, null, this.stateChange.bind(this)),
      title: '-',
      description: '-',
    };
  }

  componentDidMount () {
    const queryString = qs.decode(window.location.search);
    const initVidID = queryString['v'] || queryString['?v'] || randVids[0];

    this.createVidIDStream(initVidID).subscribe(v => {
      this.loadVid(v);
      this.loadVidInfo(v);
      this.setState({vidId: v});
      window.history.pushState({v}, v, `?v=${v}`);
    });
  }

  createVidIDStream (initVidId) {
    const next = Rx.Observable
      .fromEvent(document.querySelectorAll('.next'), 'click')
      .map(() => 1);

    const prev = Rx.Observable
      .fromEvent(document.querySelectorAll('.prev'), 'click')
      .map(() => -1);

    const popstates = Rx.Observable.fromEvent(window, 'popstate')
      .map(() => -1);

    const navs = Rx.Observable.merge(next, prev, popstates)
      .scan(0, (ac, e) => Math.max(0, ac + e))
      .startWith(0);

    return navs.map(i => i <= 0 ? initVidId : randVids[i - 1]);
  }

  stateChange (state) {
    if (state.data === 0 /* ended */) {
      // TODO: add to stream properly!
      document.querySelector('.next').click();
    }
  }

  loadVid (vidId) {
    const {player} = this.state;

    player.then(p => p.loadVideoById({
      videoId: vidId,
      startSeconds: 3
    }));
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

  render () {
    const {title, description, vidId} = this.state;
    const ytUrl = `https://www.youtube.com/watch?v=${vidId}`;

    return (
      <div id="app">
        <div>
          <span className="title">{title}</span>&nbsp;
          <a href={ytUrl}>{vidId}</a>
          <Nav />
        </div>
        <div id="player"></div>
        <Nav />
        <InfoBox content={description} />
      </div>
    );
  }
}

export default App;
