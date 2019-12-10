import * as Pixi from 'pixi.js';

Pixi.utils.skipHello();

export default class Renderer {
  constructor() {
    Object.assign(this, {
      controller: null
    });
  }

  initialize(renderingTargetElement) {
    this.controller = new Pixi.Application({
      view: renderingTargetElement,
      antialias: true,
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
