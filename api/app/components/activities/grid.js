import React from 'react';
import { browserHistory } from 'react-router';
import Kind from './kind.js';

export default class Grid extends React.Component {

  state = { kinds: { data:[] } };

  componentDidMount() {
    fetch('/kinds').then(
      res => res.json().then( this.refreshList )
    );
  }

  refreshList = list => {
    this.setState({
      kinds: {
        data: list
      }
    });
  }

  add(kind) {

    const now = new Date;
    const activity = {
        'UserId': 1,
        'KindId': kind.id,
        'description': '',
        'secret': true,
        'loggedAt': now,
        'Kind': kind
    };

    fetch('/activities', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activity)
    }).then(
      res => browserHistory.replace('/today')
    );

  }

  mapKind = kind => <Kind kind={kind} key={kind.id} handler={this.add.bind(this, kind)} />;

  render() {

    const Kinds = this.state.kinds.data.map(this.mapKind, this);

    return (
        <div className="mdl-layout__content zx-grid">
          {Kinds}
        </div>
    );
  }

}
