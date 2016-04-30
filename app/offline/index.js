function action(action, payload, callback) {

  return function(dispatch, getState) {

    const { database } = getState();

    dispatch({
      type: action,
      database: database,
      payload: payload
    })

    if(callback) {
      callback();
    }

  };

}

function reducer(state, action) {

  if (typeof state === 'undefined') {
    state = {
      data: [],
      sync: false
    };
  }

  if(action.type === 'activities/sync') {
    state.sync = true;
    action.payload.component.forceUpdate();
  }

  if(action.type === 'activities/list') {
    state.data = action.database.queryAll('activities');
  }

  if(action.type === 'activities/add') {
    action.database.insert('activities', action.payload);
    action.database.commit();
  }

  return state;

}

export default {
  activities: reducer,
  action: action
};
