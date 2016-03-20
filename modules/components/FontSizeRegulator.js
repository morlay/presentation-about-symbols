import React from 'react';

import {
  compose,
  defaultProps,
  mapProps,
} from 'recompose';

import FontSizeRegulator_ from './FontSizeRegulator_.css';

const FontSizeRegulator = compose(
  defaultProps({
    fontSize: 14,
    step: 1,
    onChange: () => null,
  }),
  mapProps(({ step, fontSize, onChange }) => ({
    smaller() {
      onChange(fontSize - step);
    },
    larger() {
      onChange(fontSize + step);
    },
  }))
)(({ smaller, larger }) => (
  <div className={FontSizeRegulator_.root}>
    <button
      className={FontSizeRegulator_.Button}
      onClick={smaller}
    >
      <small>A</small>
    </button>
    <button
      className={FontSizeRegulator_.Button}
      onClick={larger}
    >
      A
    </button>
  </div>
));

export default FontSizeRegulator;
