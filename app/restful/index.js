import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";

import activitiesMapping from './activities'
import kindsMapping from './kinds'

const mapping = Object.assign(activitiesMapping, kindsMapping)

const rest = reduxApi(mapping).use("fetch", (url, opts)=> {
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
})

export default rest