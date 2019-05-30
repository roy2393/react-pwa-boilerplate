import React, {useState} from 'react';

import {connect} from 'react-redux';
import {AppState} from '../../../core/redux/store/index';
import {
  increaseCounter,
  decreaseCounter,
} from '../../../core/redux/actions/index';

import './counter.scss';

function Counter(props) {
  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <p>You clicked {props.root.counterValue} times</p>
      <button
        onClick={() =>
          props.increaseCounter({counterValue: props.root.counterValue + 1})
        }>
        +
      </button>
      <button
        onClick={() =>
          props.decreaseCounter({counterValue: props.root.counterValue - 1})
        }>
        -
      </button>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  root: state.root,
});

export default connect(
  mapStateToProps,
  {increaseCounter, decreaseCounter},
)(Counter);
