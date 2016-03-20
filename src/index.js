import 'normalize.css/normalize.css';
import 'spectacle/lib/themes/default/index.css';

import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';

render(
  <Root />,
  document.getElementById('root')
);
