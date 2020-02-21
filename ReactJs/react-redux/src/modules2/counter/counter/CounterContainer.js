import React from 'react';
import AddCounter from './AddCounter';
import Counter from './Counter';

class CounterContainer extends React.Component {
  render() {
    return (
      <div>
        <AddCounter />
        <Counter />
      </div>
    );
  }
}

export default CounterContainer;
