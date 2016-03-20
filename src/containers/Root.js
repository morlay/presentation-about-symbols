import React from 'react';

import {
  Deck,
  Spectacle,

  Slide,
  Heading,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
  primary: 'rgb(33, 150, 243)',
});

import SvgIconWithGrid from 'modules/symbols/SvgIconWithGrid';

import IconPanel from '../components/IconPanel';
import ImageDiff from '../components/ImageDiff';
import MultiColorSVG from '../components/MultiColorSVG';

const Root = () => (
  <Spectacle theme={theme}>
    <Deck
      transition={['slide']}
      transitionDuration={500}
    >
      <Slide
        transition={['slide']}
        bgColor='primary'
      >
        <Heading
          size={1}
          caps
        >
          <span style={{ display: 'inline-flex' }}>
            Symb
            <SvgIconWithGrid
              name='accessAlarm'
            />
            ls
          </span>
        </Heading>
      </Slide>
      <Slide
        transition={['slide']}
      >
        <Heading>
          切图 ?
        </Heading>
      </Slide>
      <Slide
        transition={['slide']}
        bgColor='white'
      >
        <ImageDiff />
      </Slide>
      <Slide
        transition={['slide']}
        bgColor='primary'
      >
        <Heading>
          矢量
        </Heading>
      </Slide>
      <Slide
        transition={['slide']}
        bgColor='white'
      >
        <IconPanel />
      </Slide>
      <Slide
        transition={['slide']}
        bgColor='white'
      >
        <MultiColorSVG />
      </Slide>
      <Slide
        transition={['slide']}
      >
        <Heading>
          制作
        </Heading>
      </Slide>
      <Slide
        transition={['slide']}
      >
        <Heading>
          谢谢
        </Heading>
      </Slide>
    </Deck>
  </Spectacle>
);

export default Root;
