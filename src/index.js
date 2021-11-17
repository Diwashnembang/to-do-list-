import { dom } from "./dom";
import { storage } from "./storages";
import "./style.css";
import { display, onClickCategories } from "./displayController";

//  ! make a working prototype

function main() {
  const page = new dom();
  const html = display.makeDom(page);
  display.headerChildOn(html.headerDiv);
  display.mainChildOn(html.mainDiv);
}

const run = main();
const addProject = document.querySelector("#addProject");
const mainId = document.querySelector("#main");
const projectName = document.querySelector(".projectName");
const newStorage = new storage();
const addProjectFormNode = document.querySelector(".addProjectForm");
const addProjectButtonNode = document.querySelector("button");
const containerNode = document.querySelector(".container");

addProjectButtonNode.addEventListener("click", () => {
  const project = projectName.value;
  const todo = "this is the task ";

  // !first index add before addproject rest add after the first project

  newStorage.store(projectName.value);
  let  projectNode,firstProjectNode;
  const removeNode=(div)=>{

    const childrens=Array.from(div.children);
    for (let i = 0; i < childrens.length; i++) {
      if( childrens[i].getAttribute("class")== "addProjectForm" ||
        childrens[i].getAttribute("id") == "addProject"){
          console.log(childrens[i].getAttribute("class"),childrens[i].getAttribute("id"))
          return
        }
      childrens[i].remove()
      
    }

  }
  removeNode(containerNode)
  // for (let i = 0; i < newStorage.storage.length; i++) {
  //   console.log(i,"this is i");
  //   if (i === 0) {
  //     projectNode = display.addNodeBefore(containerNode,"section");
  //     projectNode.textContent = Object.keys(newStorage.storage[i])[i];
  //     projectNode.classList.add("first");


  //   } else {
  //     projectNode = display.addNodeBefore(firstProjectNode, "section");
  //     projectNode.textContent = Object.keys(newStorage.storage[i])[0];
      
      
  //   }
  // }
     const i = display.addNodeBefore(containerNode, "div");
     i.classList.add("project");
  newStorage.storage.forEach(project=>{

    projectNode = display.addNodeOn(i, "div")[0];
    projectNode.textContent=Object.keys(project)[0]
    projectNode.classList.add("asideText");
  })
  console.log(newStorage.storage);
});

addProject.onclick = () => {
  addProjectFormNode.classList.toggle("hidden");
};

onClickCategories();
