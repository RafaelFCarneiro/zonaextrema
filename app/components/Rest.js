import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";

const Rest = (klass) => class extends klass  {

    get rest() {
        return reduxApi(this.routes).use("fetch", (url, options) => fetch(url, options).then((resp)=> resp.json()));
    }

    constructor(props) {
        super(props)
    }

}

export default Rest