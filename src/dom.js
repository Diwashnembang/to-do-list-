export class dom {
  constructor() {
    this.body = document.querySelector("body");
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");
  }

  structure() {
    const header = this.body.appendChild(this.header);
    const main = this.body.appendChild(this.main);
    const footer = this.body.appendChild(this.footer);
    return { headerDiv: header, mainDiv: main, footerDiv: footer };
  }

  appendNodeOn(parentDom, ...types) {
    let key = 0;
    let nodes = {};
    types.forEach((type) => {
      const newDom = document.createElement(type);
      parentDom.appendChild(newDom);
      nodes[key] = newDom;
      key++;
    });
    key = 0;
    return nodes;
  }

  prependNodeOn(parentDiv, type) {
    const newNode = document.createElement(type);
    parentDiv.prepend(newNode);
    return newNode;
  }

  dataTypeOn(div, type, value) {
    return div.setAttribite(`data-${type}`, `${value}`);
  }
  clear(dom) {
    dom.textContent = "";
  }
}
