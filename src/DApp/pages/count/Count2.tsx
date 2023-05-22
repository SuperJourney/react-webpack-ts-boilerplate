import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../stores/countslice';

interface Props {
  counter: number;
  increment: Function;
  decrement: Function;
}

export class Count2 extends Component<Props> {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count2);
