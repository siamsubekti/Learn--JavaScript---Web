import React from 'react';
import { connect } from 'react-redux';

class AddCounter extends React.Component {
  render() {
    return(
      <div className="AddCounter">
        <button onClick={ () => this.props.dispatch({type: 'ADD_COUNTER'}) }>Add Counter</button>
        <button onClick={ () => this.props.dispatch({type: 'CLEAR_COUNTER'}) } disabled={this.props.counters.length === 0}>Clear Counter</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.counter };
}

export default connect(mapStateToProps)(AddCounter);
