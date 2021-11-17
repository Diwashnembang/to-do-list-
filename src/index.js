import { dom } from "./dom";
import { storage } from "./storages";
import "./style.css";
import { display, onClickCategories} from "./displayController";

//  ! make a working prototype

function main() {
  const page = new dom();
  const html = display.makeDom(page);
  display.headerChildOn(html.headerDiv);
  display.mainChildOn(html.mainDiv);
}

const run = main();
const addProject = document.querySelector(".button");
const mainId = document.querySelector("#main");
const projectName = document.querySelector(".projectName");
const newStorage = new storage();

addProject.addEventListener("click", () => {
  const project = projectName.value;
  const todo = "this is the task ";
  newStorage.store(
    project,
    todo,
    "this is discription",
    "the priority is high",
    "2058/12/28"
  );
  mainId.textContent = JSON.stringify(newStorage.storage[0]);
});

onClickCategories();
