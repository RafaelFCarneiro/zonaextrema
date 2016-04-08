import reduxApi, {transformers} from "redux-api"

const kindsMapping = {
    kinds: {
        url: `/kinds`
        , crud: true
        , transformer: transformers.array
    }
}

export default kindsMapping