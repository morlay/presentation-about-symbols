import React, { PropTypes, cloneElement } from 'react';

import * as Graphes from './contants/Graphes';

import _ from 'lodash';
import classNames from 'classnames';

const graphNames = _.keys(Graphes);

const Graph = ({ name, className }) => (
  <span className={classNames(className)}>
    {cloneElement(Graphes[name])}
  </span>
);

Graph.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(graphNames),
};

export {
  graphNames,
};

export default Graph;
