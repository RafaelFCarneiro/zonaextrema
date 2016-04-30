import {transformers} from 'redux-api';

const activitiesMapping = {
    activitiesOnline: {
        url: '/activities/:id'
        , crud: true
        , transformer: transformers.array,
        options: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    }
};

export default activitiesMapping;
