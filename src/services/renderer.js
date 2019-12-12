import * as Pixi from 'pixi.js';

import {Service} from '~/helpers/service';

Pixi.utils.skipHello();

export default class Renderer extends Service {
  constructor(services) {
    super(services);

    Object.assign(this, {
      controller: null
    });
  }

  initialize(renderingTargetElement) {
    this.controller = new Pixi.Application({
      view: renderingTargetElement,
      antialias: true,
      transparent: true,
      autoStart: false
    });
  }

  reset() {
    this.stop();

    this.controller.destroy();

    this.controller = null;
  }

  start() {
    this.controller.start();
  }

  stop() {
    this.controller.stop();
  }
}
