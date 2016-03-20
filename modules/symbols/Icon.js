import React, { PropTypes } from 'react';

import Icons_ from './__generated/Icons_.css';

import _ from 'lodash';
import classNames from 'classnames';

const iconNames = _.keys(_.omit(Icons_, 'root'));

const Icon = ({ name, className, ...otherProps }) => (
  <i
    {...otherProps}
    className={classNames(className, Icons_.root, Icons_[name])}
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(iconNames),
};

export {
  iconNames,
};

export default Icon;
