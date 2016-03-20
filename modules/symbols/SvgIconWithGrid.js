import React from 'react';

import SvgIcon from './SvgIcon';
import Graph from './Graph';

import SvgIconWithGrid_ from './SvgIconWithGrid_.css';

const SvgIconWithGrid = ({ name, ...otherProps }) => (
  <span
    {...otherProps}
    className={SvgIconWithGrid_.root}
  >
    <Graph
      className={SvgIconWithGrid_.Grid}
      name='grid'
    />
    <SvgIcon
      className={SvgIconWithGrid_.Icon}
      name={name}
    />
  </span>
);

SvgIconWithGrid.propTypes = {
  name: SvgIcon.propTypes.name,
};

export default SvgIconWithGrid;
