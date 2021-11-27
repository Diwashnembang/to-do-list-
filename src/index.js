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
const cancelButtonNode = document.querySelector(".cancel");
const projectPreview = document.querySelector(".projectPreview");

//  ! this is shown when the page is loaded at first
const header = display.mainHeader(projectPreview);
header.textContent = "Inbox";
display.renderProjectPreviewContent(projectPreview);

const addTaskNode = document.querySelector("#addTask");
const addTaskFormNode = document.querySelector(".addTaskForm");
const taskContainer = document.querySelector("#taskContainer");
const addTaskButton = document.querySelector("#addTask");

// console.log(addTaskNode)

addProjectButtonNode.addEventListener("click", () => {
  display.displayProjectList(
    projectName,
    containerNode,
    addProjectFormNode,
    addProject
  );
});

//@param  input,containerNode,addProjectFormNode,addProject

addProject.onclick = () => {
  addProjectFormNode.classList.remove("hidden");
  addProject.style.display = "none";
};

cancelButtonNode.onclick = () => {
  addProjectFormNode.classList.add("hidden");
  addProject.style.display = "flex";
};
onClickCategories(); // click event and selected style for aside content

// todo : work with dates and add all the function related with dates
