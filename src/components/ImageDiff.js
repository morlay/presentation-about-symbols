import React from 'react';

import accountBoxUrl from './images/accountBox.png';
import accountBoxActiveUrl from './images/accountBoxActive.png';

import ImageDiff_ from './ImageDiff_.css';

const ImageDiff = () => (
  <div className={ImageDiff_.root}>
    <div className={ImageDiff_.SizeDiff}>
      <img
        src={accountBoxUrl}
        style={{ width: 48 }}
      />
      <img
        src={accountBoxUrl}
        style={{ width: 72 }}
      />
      <img
        src={accountBoxUrl}
        style={{ width: 128 }}
      />
      <img
        src={accountBoxUrl}
        style={{ width: 256 }}
      />
    </div>
    <div className={ImageDiff_.ColorDiff}>
      <img
        src={accountBoxUrl}
        style={{ width: 72 }}
      />
      <img
        src={accountBoxActiveUrl}
        style={{ width: 72 }}
      />
    </div>
  </div>
);

export default ImageDiff;
