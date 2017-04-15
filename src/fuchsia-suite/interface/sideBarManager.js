import React from 'react';

export default class SideBarManager {

  constructor(FuchsiaInterface) {
    this.sideBarElements = {
      general: [],
    };
    this.FuchsiaInterface = FuchsiaInterface;
  }

  initialize(elements) {
    this.sideBarElements = elements;
  }

  addSideBarElement(label, url, namespace = "general") {
    if (!this.sideBarElements.hasOwnProperty(namespace)) {
      this.sideBarElements[namespace] = [];
    }
    this.sideBarElements[namespace].push({ label, url });
  }

  generateSideBar() {
    const namespaces = Object.keys(this.sideBarElements);
    return namespaces.map((namespace) => {
      return (
        <div key={ namespace }>
          <p className="menu-label">
            { namespace }
          </p>
          <ul className="menu-list">
            { this.sideBarElements[namespace].map((el) => {
              return (
                <li key={ el.label }>
                  <a href={ el.url }>{ el.label }</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

}
