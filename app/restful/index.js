import reduxApi from 'redux-api';
import fetch from 'isomorphic-fetch';

import kindsMapping from './kinds';

const rest = reduxApi(kindsMapping).use('fetch', (url, opts)=> {
  return fetch(url, opts).then((r)=> r.json().then(
    (d)=> new Promise(
      (resolve, reject)=> {
        if (r.status >= 200 && r.status < 300) {
          resolve(d);
        } else {
          reject(d);
        }
      }
    )));
});

export default rest;
