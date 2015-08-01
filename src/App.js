import React from 'react';
import jsonp from 'jsonp';
import qs from 'querystring';
import Rx from 'rx';
import RxFuncSubject from './RxFuncSubject';

import constants from './constants';
import player from './youtubePlayer';
import Nav from './Nav';
import InfoBox from './InfoBox';

import rand from './rand';
const randVids = rand(window.allVids);

class App extends React.Component {

  constructor (props) {
    super(props);

    const queryString = qs.decode(window.location.search);
    const vidId = queryString['v'] || queryString['?v'] || randVids[randVids.length - 1];

    this.state = {
      player: player(640, 390, null, this.stateChange.bind(this)),
      title: '-',
      description: '-',
      vidId
    };

    this.handlers = {
      next: RxFuncSubject(),
      prev: RxFuncSubject(),
      end: RxFuncSubject()
    };
  }

  componentDidMount () {
    this.createVidIDStream(this.state.vidId).subscribe(v => {
      this.loadVid(v);
      this.loadVidInfo(v);
      this.setState({vidId: v});
      window.history.pushState({v}, v, `?v=${v}`);
    });
  }

  createVidIDStream (initVidId) {
    const {next, prev, end} = this.handlers;
    const fwd = () => +1;
    const back = () => -1;

    return Rx.Observable.merge(
      next.map(fwd),
      prev.map(back),
      end.map(fwd),
      Rx.Observable.fromEvent(window, 'popstate').map(back)
    )
      .scan(0, (ac, e) => Math.max(0, ac + e))
      .startWith(0)
      .map(i => i == 0 ? initVidId : randVids[i - 1]);
  }

  stateChange (state) {
    if (state.data === 0 /* ended */) {
      this.handlers.end();
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
    const {next, prev} = this.handlers;
    const ytUrl = `https://www.youtube.com/watch?v=${vidId}`;

    return (
      <div id="app">
        <div>
          <span className="title">{title}</span>&nbsp;
          <a href={ytUrl}>{vidId}</a>
          <Nav onNext={next} onPrev={prev}/>
        </div>
        <div id="player"></div>
        <Nav onNext={next} onPrev={prev}/>
        <InfoBox content={description} />
      </div>
    );
  }
}

export default App;
