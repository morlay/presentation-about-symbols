import 'react-colors-picker/assets/index.css';

import React from 'react';

import ColorableAndroidIcon from 'modules/symbols/ColorableAndroidIcon';


import ColorPicker, { getColorString } from 'modules/components/ColorPicker';

import MultiColorSVG_ from './MultiColorSVG_.css';

import {
  compose,
  withState,
} from 'recompose';

const MultiColorSVG = compose(
  withState('headColor', 'updateHeadColor', { r: 0, g: 0, b: 0 }),
  withState('bodyColor', 'updateBodyColor', { r: 0, g: 0, b: 0 }),
)(({ headColor, bodyColor, updateHeadColor, updateBodyColor }) => (
  <div className={MultiColorSVG_.root}>
    <div className={MultiColorSVG_.Icon}>
      <ColorableAndroidIcon
        headColor={getColorString(headColor)}
        bodyColor={getColorString(bodyColor)}
      />
    </div>
    <div className={MultiColorSVG_.Controls}>
      <div className={MultiColorSVG_.Item}>
        <span>
          <ColorPicker
            color={headColor}
            onChange={updateHeadColor}
          />
        </span>
        <span className={MultiColorSVG_.Text}>
          头部颜色
        </span>
      </div>
      <div className={MultiColorSVG_.Item}>
        <span>
          <ColorPicker
            color={bodyColor}
            onChange={updateBodyColor}
          />
        </span>
        <span className={MultiColorSVG_.Text}>
          身体颜色
        </span>
      </div>
    </div>
  </div>
));

export default MultiColorSVG;
