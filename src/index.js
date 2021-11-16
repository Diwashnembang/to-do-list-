import { dom } from "./dom";
import { storage } from "./storages";
import "./style.css";
import { display } from "./displayController";

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

/*  
*collets the project and todo from respective class and merge it 
!!{
    !const test={
    !"demo":{
        !todos:{
            !todo1:"this is first to do "
        !},
        !discrioption:"this is demo"
    !}
!}
!}
*/

const newStorage = new storage();
addProject.addEventListener("click", () => {
  const project=projectName.value;
  const todo="this is the task "
  newStorage.store(project,todo,"this is discription","the priority is high")
  console.log("this is from the click ");
  console.log(newStorage.storage[0])
  console.log("this is the storage",newStorage.storage);
  mainId.textContent = JSON.stringify(newStorage.storage[0]);
});

console.log(newStorage.storage)