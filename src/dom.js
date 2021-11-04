export class dom {
  constructor() {
    this.body = document.querySelector("body");
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");
  }

  createStructure() {
    const header = this.body.appendChild(this.header);
    const main = this.body.appendChild(this.main);
    const footer = this.body.appendChild(this.footer);
    return { header, main, footer };
  }

  expandDom(dom, ...types) {
    let key = 0;    
    let nodes = {};
    types.forEach((type) => {
      const newDom = document.createElement(type);
      dom.appendChild(newDom);
      nodes[key] = newDom;
      key++;
    });
    key = 0;
    return nodes;
  }

  clearDom(dom) {
    dom.textContent = "";
  }
}
