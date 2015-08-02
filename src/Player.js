import React from 'react';
const { Component } = React;
import player from './lib/youtubePlayer';
import getVideoInfo from './lib/getVideoInfo';

class Player extends Component {

  constructor (props) {
    super(props);

    this.player = player(700, 450, null, this.vidStateChange.bind(this));
    this.loadVid(props.vidID);
  }

  componentWillReceiveProps ({vidID}) {
    if (vidID !== this.props.vidID) {
      this.loadVid(vidID);
    }
  }

  loadVid (vidId) {
    const {onInfoLoad} = this.props;

    this.player.then(p => p.loadVideoById({
      videoId: vidId,
      startSeconds: 3
    }));

    getVideoInfo(vidId, snippet => onInfoLoad(snippet));
  }

  vidStateChange (state) {
    if (state.data === 0 /* ended */) {
      this.props.onEnd();
    }
  }

  render () {
    return (
      <div id="player"></div>
    );
  }
}

export default Player;
