import Pages from '../pages/index';
import Components from '../components/index';

export default class ComponentManager {

  constructor(FuchsiaInterface) {
    this.pages = {
      ...Pages,
    };
    this.components = {
      ...Components,
    };
    this.FuchsiaInterface = FuchsiaInterface;
  }

  addPage(name, component) {
    if (this.pages.hasOwnProperty(name)) {
      throw Error(`Attempted to add page "${name}" when it already exists.`);
    }
    if (typeof component !== 'function') {
      throw Error('Parameter "component" must be a function.');
    }
    this.pages[name] = component;
  }

  addComponent(name, component) {
    if (this.pages.hasOwnProperty(name)) {
      throw Error(
        `Attempted to add component "${name}" when it already exists.`
      );
    }
    if (typeof component !== 'function') {
      throw Error('Parameter "component" must be a function.');
    }
    this.components[name] = component;
  }

  getPage(name) {
    if (!this.pages.hasOwnProperty(name)) {
      throw Error(`Undefined page "${name}".`);
    }
    return this.pages[name];
  }

  getComponent(name) {
    if (!this.components.hasOwnProperty(name)) {
      throw Error(`Undefined component "${name}".`);
    }
    return this.components[name];
  }
}
