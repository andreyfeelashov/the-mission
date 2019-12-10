import React from 'react';
import ReactDom from 'react-dom';

import Root from '~/components/layout/root';

import Renderer from '~/services/renderer';

import {getEnvironment} from '~/helpers/misc';

const environment = getEnvironment();

if (environment.browser) {
  document.addEventListener('DOMContentLoaded', start, {
    once: true
  });
}

function start() {
  const services = {};
  services.renderer = new Renderer(services);

  ReactDom.render(
    <Root services={services} />,
    document.querySelector('.root-wrapper')
  );
}
