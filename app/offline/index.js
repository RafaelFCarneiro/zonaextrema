function action(action, payload, callback) {

  return function(dispatch, getState) {

    const {database, rest} = getState();

    dispatch({
      type: action,
      database: database,
      rest: rest,
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
      async: false,
      merged: false
    };
  }

  if(action.type === "activities/merge") {
    debugger;
  }

  if(action.type === 'activities/sync') {
    action.payload.component.forceUpdate();
  }

  if(action.type === 'activities/list') {
    state.data = action.database.queryAll('activities');
    state.async = true;
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
