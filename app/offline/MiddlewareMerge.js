export default function MiddlewareMerge({ getState }) {

  return (next) => (action) => {
    console.log('MiddlewareMerge', action);

    let returnValue = next(action);

    let state = getState();

    console.log('MiddlewareMerge: state after dispatch', state);

    if(action.type === 'activities/merge') {
      const {rest} = state;
      const {add} = state.activities.dirty;

      const sync = () => {
        dispatch( offline.action('activities/sync', {
          component: action.payload.component
        }) );
      };

      add.forEach( (activity) => {
        rest.actions.activitiesOnline.post( {}, { body: JSON.stringify(activity) }, sync );
      });
    }

    return returnValue;
  };

}
