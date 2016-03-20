import React, { PropTypes } from 'react';

const headPath = `
M-212.6,
398l6.3-6.3l-2.5-2.4l-6.9,
6.9c-3-1.5-6.1-2.2-9.3-2.2s-6.3,
0.8-9.3,
2.2l-6.9-6.9l-2.5,
2.4l6.3,
6.3c-5.7,
4.2-8.6,
9.8-8.6,
16.9v3.1h41.9v-3.1C-204,
407.8-206.9,
402.2-212.6,398z M-231.9,
411c-0.6,
0.6-1.3,
0.8-2.1,
0.8c-0.8,
0-1.5-0.3-2.1-0.8s-0.8-1.3-0.8-2.1s0.3-1.6,0.8-2.2c0.6-0.6,1.3-0.9,
2.1-0.9s1.5,
0.3,2.1,
0.9c0.6,
0.6,
0.8,1.3,0.8,2.2
S-231.3,
410.5-231.9,411z M-213.9,411c-0.6,0.6-1.3,0.8-2.1,0.8c-0.8,
0-1.5-0.3-2.1-0.8s-0.8-1.3-0.8-2.1s0.3-1.6,0.8-2.2
c0.6-0.6,1.3-0.9,2.1-0.9s1.5,
0.3,2.1,0.9c0.6,0.6,0.8,1.3,
0.8,2.2S-213.3,410.5-213.9,411z`;

const bodyPath = `
M-246,432.8v-12h41.9v12c0,
5.8-2,10.8-6.1,14.9c-4.1,4.1-9,6.2-14.8,
6.2s-10.8-2.1-14.8-6.2 C-243.9,443.6-246,438.7-246,432.8z
`;

const ColorableAndroidIcon = ({ headColor, bodyColor }) => (
  <span>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-261 384.9 72 72'
    >
      <path
        fill={headColor}
        d={headPath}
      />
      <path
        fill={bodyColor}
        d={bodyPath}
      />
    </svg>
  </span>
);

ColorableAndroidIcon.propTypes = {
  headColor: PropTypes.string,
  bodyColor: PropTypes.string,
};

export default ColorableAndroidIcon;