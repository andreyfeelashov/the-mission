import React from 'react';
import ReactDom from 'react-dom';

import Root from '~/components/layout/root';

import Renderer from '~/services/renderer';
import Themer from '~/services/themer';

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
  services.themer = new Themer(services);

  const rootWrapperElement = document.querySelector('.root-wrapper');

  services.themer.initialize(rootWrapperElement);

  ReactDom.render(<Root services={services} />, rootWrapperElement);
}
