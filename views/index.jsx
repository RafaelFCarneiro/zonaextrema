import React from 'react';
import DefaultLayout from './default.jsx';
import Unlogged from './unlogged.jsx';
import Profile from './profile.jsx';

export default class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        {
          this.props.user ?
            <Profile user={this.props.user} /> : 
            <Unlogged />
        }
      </DefaultLayout>
    );
  }
}
