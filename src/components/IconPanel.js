import 'react-colors-picker/assets/index.css';

import React from 'react';
import _ from 'lodash';

import Icon, { iconNames } from 'modules/symbols/Icon';
import SvgIcon, { iconNames as svgIconNames } from 'modules/symbols/SvgIcon';

import ColorPicker, { getColorString } from 'modules/components/ColorPicker';
import FontSizeRegulator from 'modules/components/FontSizeRegulator';

import IconPanel_ from './IconPanel_.css';

import {
  compose,
  withState,
} from 'recompose';

const IconPanel = compose(
  withState('color', 'updateColor', { r: 0, g: 0, b: 0 }),
  withState('fontSize', 'updateFontSize', 48),
)(({ color, fontSize, updateColor, updateFontSize }) => (
  <div className={IconPanel_.root}>
    <div className={IconPanel_.Controls}>
      <FontSizeRegulator
        fontSize={fontSize}
        step={24}
        onChange={updateFontSize}
      />
      <ColorPicker
        color={color}
        onChange={updateColor}
      />
    </div>
    <div
      className={IconPanel_.IconList}
      style={{ fontSize }}
    >
      <h6 className={IconPanel_.Title}> WebFont </h6>
      <div>
        {_.map(iconNames, (iconName) => (
          <div
            className={IconPanel_.Icon}
            key={iconName}
          >
            <Icon
              style={{ color: getColorString(color) }}
              name={iconName}
            />
          </div>
        ))}
      </div>

      <h6 className={IconPanel_.Title}> Inline SVG </h6>
      <div>
        {_.map(svgIconNames, (iconName) => (
          <SvgIcon
            style={{ fill: getColorString(color) }}
            key={iconName}
            name={iconName}
          />
        ))}
      </div>
    </div>
  </div>
));

export default IconPanel;
