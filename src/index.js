import { dom } from "./dom";
import { storage } from "./storages";
import "./style.css";
import {
  display,
  eventOnProjectList,
  onClickCategories,
} from "./displayController";

//  ! make a working prototype

function main() {
  const page = new dom();
  const html = display.makeDom(page);
  display.headerChildOn(html.headerDiv);
  display.mainChildOn(html.mainDiv);
}

const run = main();
const addProject = document.querySelector("#addProject");
const projectName = document.querySelector(".projectName");
const newStorage = new storage();
const addProjectFormNode = document.querySelector(".addProjectForm");
const addProjectButtonNode = document.querySelector("button");
const containerNode = document.querySelector(".container");
const cancelButtonNode=document.querySelector('.cancel');

addProjectButtonNode.addEventListener("click", () => {
  newStorage.store(projectName.value);
  // @param storage is the array and containerNode is the div that contains projects in aside
  display.renderProjectList(newStorage.storage, containerNode);
  eventOnProjectList();
   addProjectFormNode.classList.add("hidden");
   addProject.style.display = "flex";
});

addProject.onclick = () => {
  addProjectFormNode.classList.remove("hidden");
  addProject.style.display="none"
};

cancelButtonNode.onclick=()=>{
  addProjectFormNode.classList.add("hidden");
  addProject.style.display = "flex";
}
onClickCategories(); // click event and selected style for aside content
