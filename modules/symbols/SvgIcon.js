import React, { PropTypes, cloneElement } from 'react';

import * as Icons from './contants/Icons';

import _ from 'lodash';
import classNames from 'classnames';
import SvgIcon_ from './SvgIcon_.css';

const iconNames = _.keys(Icons);

const SvgIcon = ({ name, className, ...otherProps }) => (
  <span
    {...otherProps}
    className={classNames(className, SvgIcon_.root)}
  >
    {cloneElement(Icons[name])}
  </span>
);

SvgIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(iconNames),
};

export {
  iconNames,
};

export default SvgIcon;
