import jsonp from 'jsonp';
import constants from '../constants/index';

export default (vidId, cb) => {
  const base = 'https://www.googleapis.com/youtube/v3/videos';
  const url = `${base}?id=${vidId}&key=${constants.APIKEY}&part=snippet&`;
  jsonp(url, (err, data) => {
    if (data && data.items) {
      cb(data.items[0].snippet);
    }
  });
};
