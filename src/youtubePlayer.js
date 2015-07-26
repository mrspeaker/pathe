const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const onPlayerReady = (event) => {
  event.target.playVideo();
};

const onPlayerStateChange = (e, l) => {
  console.log(e, l)
  if (e.target.getVideoData) console.log(e.target.getVideoData())
  if (e.data == YT.PlayerState.PLAYING) {
    //setTimeout(stopVideo, 6000);
  }
};

const ytPromise = new Promise(res => {
  window.onYouTubeIframeAPIReady = res;
});

const ytPlayer = (w=640, h=390, vidId='RFJ67N-UR5w') => ytPromise.then(() => {
  return new window.YT.Player('player', {
    height: `${h}`,
    width: `${w}`,
    videoId: `${vidId}`,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0
    }
  });
});

export default ytPlayer;
