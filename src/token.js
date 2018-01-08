import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editToken } from './actions'

const mapStateToProps = (state, ownProps) => {
  const { tokens } = state;
  const props = tokens.find((t) => t.id === ownProps.id)
  return (props) ? { ...props } : {}
}

class Token extends Component {

  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
  }

  edit(e) {
    this.props.dispatch(editToken(this.props.id))
  }


  render() {
    const { name, id } = this.props
    return (
      <div className="token-creature" onClick={ this.edit }>
        <p>{ name }</p>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Token);
