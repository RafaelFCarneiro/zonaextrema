import React from 'react';

export default class TagEdit extends React.Component {

  state = { editable: false, tag: '' };

  edit(editable, description, event) {

    let value = event.target.value;
    if(value) {
      this.props.editHandler( value );
    } else {
      value = this.state.tag;
    }

    this.setState({
      editable: !editable,
      tag: value
    });

  }

  render() {

    const {description} = this.props;

    const value = this.state.tag.trim().length ?
                      this.state.tag :
                      description.trim().length ? description : '...';

    const edit = this.edit.bind(this, this.state.editable, value);

    const template = ( this.state.editable ) ?
      <input onBlur={edit} type="text" defaultValue={value} /> :
      <a onClick={edit}>{value}</a>;

    return (
      <div>
        {template}
      </div>
    );

  }

}
