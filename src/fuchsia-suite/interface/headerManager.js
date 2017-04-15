import React from 'react';

export default class HeaderManager {

  constructor(FuchsiaInterface) {
    this.headerElements = {
      logo: {},
      "nav_left": [],
      "nav_right": []
    };
    this.FuchsiaInterface = FuchsiaInterface;
  }

  initialize(elements) {
    this.headerElements = elements;
  }

  addHeaderElement(label, url, position = "nav_left") {
    if (!this.headerElements.hasOwnProperty(position)) {
      throw Error(`Invalid position ${position} specified. Header expects only "nav_left" or "nav_right" positions`);
    }
  }

  generateNavSubList(items) {
    return items.map((item) => {
      if (item.type === "link") {
        return (
          <a key={item.label} href={item.url} className={`nav-item ${item.classes}`}>{item.label}</a>
        );
      }
      console.log('TODO: components', item);
      return null;
    });
  }

  generateHeader() {
    const { logo, nav_left, nav_right } = this.headerElements;
    return (
      <div className="container">
        <div className="nav-left">
          <a className="nav-item">
            <img src={logo.src} alt={logo.alt} />
          </a>
          { this.generateNavSubList(nav_left) }
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          { this.generateNavSubList(nav_right) }
        </div>
      </div>
    );
  }

}
