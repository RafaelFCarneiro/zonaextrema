import React from 'react';

export default class Kind extends React.Component {

  render() {

    const {kind, handler} = this.props;
    const {description, color} = kind;
    const style = {
      backgroundColor: color
    };

    return (
        <div onClick={handler} className="zx-kind" style={style}>
            {description}
        </div>
    );

  }

}
