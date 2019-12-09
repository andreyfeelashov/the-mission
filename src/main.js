import React from 'react';
import ReactDom from 'react-dom';

import Root from '~/components/layout/root';

import {getEnvironment} from '~/helpers/misc';

const environment = getEnvironment();

if (environment.browser) {
  document.addEventListener('DOMContentLoaded', start, {
    once: true
  });
}

function start() {
  ReactDom.render(<Root />, document.querySelector('.root-wrapper'));
}
