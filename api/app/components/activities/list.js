import React from 'react';
import Activity from './activity';

export default class List extends React.Component {

  state = { activities: { data: [] } };

  componentDidMount() {
    fetch('/activities').then(
      res => res.json().then( this.refreshList )
    );
  }

  refreshList = list => {
    this.setState({
      activities: {
        data: list
      }
    });
  }

  saveDescription = (activity) => {
    console.log(activity.description);
  }

  mapActivity = (activity) => {
    return <Activity key={activity.id} activity={activity} editHandler={this.saveDescription.bind(this, activity)} />;
  }

  render() {

    const Items = this.state.activities.data.map( this.mapActivity );

    return (
      <div className="mdl-layout__content zx-activities">
      { Items }
      </div>
    );
  }
}
