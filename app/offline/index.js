function action(action, payload, callback) {

  return function(dispatch, getState) {

    const {database, rest, activitiesOnline} = getState();

    dispatch({
      type: action,
      database: database,
      rest: rest,
      activitiesOnline: activitiesOnline,
      payload: payload
    });

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
      merged: false,
      dirty: {
        add: []
      }
    };
  }

  if(action.type === 'activities/merge') {
    state.data.reduce( function(dirty, activity, index, collection) {
      let founded = action.activitiesOnline.data.filter( function(act){ return act.token === activity.token } ).length;
      //lembrar de verificar se ele já não está no add
      if(activity.token && !founded ) {
        dirty.add.push(activity);
      }
      return dirty;
    }, state.dirty);
  }

  if(action.type === 'activities/sync') {
    action.payload.component.forceUpdate();
  }

  if(action.type === 'activities/list') {
    state.data = action.database.queryAll('activities');
    state.async = true;
  }

  if(action.type === 'activities/add') {
    action.payload.token = 'activities-' +
                            action.payload.UserId +
                            '-' +
                            action.payload.KindId +
                            (new Date).getTime();
    action.database.insert('activities', action.payload);
    action.database.commit();
  }

  return state;

}

export default {
  activities: reducer,
  action: action
};
