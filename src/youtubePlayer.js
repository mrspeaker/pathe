const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// const onPlayerReady = (event) => {
//   event.target.playVideo();
// };

// const onPlayerStateChange = e => {
//   if (e.target.getVideoData) console.log(e.target.getVideoData());
//   if (e.data == YT.PlayerState.PLAYING) {
//     //setTimeout(stopVideo, 6000);
//   }
// };

const ytPromise = new Promise(res => {
  window.onYouTubeIframeAPIReady = res;
});

const ytPlayer = (w=640, h=390, vidId, onStateChange) => ytPromise.then(() => new Promise((res, rej) => {

  const options = {
    height: `${h}`,
    width: `${w}`,
    events: {
      'onReady': () => {
        console.log("ready called");
        return res(player);
      },
      'onStateChange': onStateChange || (() => {})
    },
    playerVars: {
      controls: 1
    }
  };
  if (vidId) options.videoId = `${vidId}`;
  const player = new window.YT.Player('player', options);

}));

export default ytPlayer;
