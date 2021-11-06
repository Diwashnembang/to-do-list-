import { dom } from "./dom";
import { storage } from "./storages";
import "./style.css";
import { display } from "./displayController";

function main() {
  const page = new dom();
  const newStorage = new storage();
  const html = display.makeDom(page);
  display.headerChildOn(html.headerDiv);
  display.mainChildOn(html.mainDiv);
}

const run = main();
