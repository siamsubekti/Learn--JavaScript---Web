import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return this.props.counters.map((counter, index) => {
      return (
        <div key={index} className="Card">
          <button className="delete" onClick={() => this.props.dispatch({type: 'DELETE_COUNTER', index})}>x</button>
          <h4 className="title">Tamkur {index + 1}</h4>
          <p className="sub-title">Tambah Kurang Redux</p>
          <div className="controls">
            <button onClick={() => this.props.dispatch({type: 'DECREMENT', index})}>-</button>
            <p className="counter">{ counter }</p>
            <button onClick={() => this.props.dispatch({type: 'INCREMENT', index})}>+</button>
          </div>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return { ...state.counter };
}

export default connect(mapStateToProps)(Counter);
