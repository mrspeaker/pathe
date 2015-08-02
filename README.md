# British Pathé random video viewer

[![Random video viewer](https://cloud.githubusercontent.com/assets/129330/9027930/a9cbb9e4-3935-11e5-98f1-55b9b98f54ed.png "Random Video Viewer")](http://mrspeaker.github.io/pathe/)

Check out the ["random video viewer"](http://mrspeaker.github.io/pathe/) online. It endlessly plays random videos from the 82058 videos made available by British Pathé. 

## Building

The code is all ES6, built with [jspm.io](http://jspm.io/). To build, `jspm install`. The most interestin' place to start is [App.js](https://github.com/mrspeaker/pathe/blob/master/src/App.js)

## Notes

This is a React app that uses RxJS to [create and consume a stream of video ids](https://github.com/mrspeaker/pathe/blob/4a4321d3ca8936ab5b5a96e632a0a940847f2d9b/src/App.js#L47) based on button clicks & pop state events.
