export class Service {
  constructor(services) {
    Object.assign(this, {
      dependencies: {services}
    });
  }
}
