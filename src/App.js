import React from 'react';
import querystring from 'querystring';
import Rx from 'rx';
import RxFunc from './lib/RxFuncSubject';
import rand from './lib/rand';

import Nav from './Nav';
import InfoBox from './InfoBox';
import Player from './Player';

// TODO: Randomizes the huge global array of vid ids. Fix this, eh.
const randVids = rand(window.allVids);

class App extends React.Component {

  constructor (props) {
    super(props);

    const qs = querystring.decode(window.location.search);
    const vidId = qs['v'] || qs['?v'] || randVids[randVids.length - 1];

    this.state = {
      title: '',
      description: '...',
      vidId
    };

    this.handlers = {
      next: RxFunc(),
      prev: RxFunc(),
      end: RxFunc()
    };

    this.stream = this.createVidIDStream(vidId);
    this.onInfoLoad = this.onInfoLoad.bind(this);
  }

  componentDidMount () {
    this.stream.subscribe(this.onVideoChanged);
  }

  createVidIDStream (initVidId) {
    const {next, prev, end} = this.handlers;
    const fwd = () => +1;
    const back = () => -1;

    return Rx.Observable.merge(
      next.map(fwd),
      prev.map(back),
      end.map(fwd),
      Rx.Observable.fromEvent(window, 'popstate').map(back))
        .scan(0, (ac, e) => Math.max(0, ac + e))
        .startWith(0)
        .map(i => i == 0 ? initVidId : randVids[i - 1]);
  }

  onVideoChanged (v) {
    this.setState({
      title: '...loading...',
      description: '',
      vidId: v
    });

    window.history.pushState({v}, v, `?v=${v}`);
  }

  onInfoLoad ({title, description}) {
    this.setState({
      title,
      description: description.replace(/\n\n/g, '\n')
    });
    document.title = title;
  }

  render () {
    const {title, description, vidId} = this.state;
    const {next, prev, end} = this.handlers;

    return (
      <div id="app">
        <div className="header">
          <span>🎥</span>&nbsp;
          <a className="title" href={`https://www.youtube.com/watch?v=${vidId}`}>{title}</a>
          <Nav onNext={next} onPrev={prev}/>
        </div>
        <Player vidID={vidId} onEnd={end} onInfoLoad={this.onInfoLoad} />
        <Nav onNext={next} onPrev={prev}/>
        <InfoBox content={description} />
        <div id="credits">
            <a href="https://github.com/mrspeaker/pathe" title="Source on github">Code</a> by <a href="http://www.mrspeaker.net/">Mr Speaker</a>
        </div>
      </div>
    );
  }
}

export default App;
