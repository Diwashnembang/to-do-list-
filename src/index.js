import { dom } from "./dom";
import { storage } from "./storages";
import "./style.css";

// *https://fontawesome.com/v5.15/icons/check-double?style=solid for the logo .give credit


// *todo shift this code to display controller 

function makeDom(dom) {
  return dom.createStructure();
}

function addNode(dom, parent, ...type) {
  return dom.expandDom(parent, ...type);
}

/*
 *@param newDom is the dom class which has all the dom method and nodes are head body footer
 */
function headerContent(newDom, nodes) {
  const title = addNode(newDom, nodes.header, "div", "div");
  title[0].innerHTML = "<i class='fas fa-check-double'></i>"; //!returns an obj that starts with key 0 not an array
  title[0].classList.add("logo");
  title[1].textContent = "Todo List";
  title[1].classList.add("title");
}

function mainContent(newDom, nodes) {
  const body = addNode(newDom, nodes.main, "aside", "div"); //!returns an obj that starts with key 0.not an array
  const aside = body[0];
  const main = body[1];
  main.setAttribute("id", "main");
  makeAsideContent(aside, newDom);
    main.textContent=" "
}

function makeAsideContent(aside, newDom) {
  const asideNodes = addNode(
    newDom,
    aside,
    "section",
    "section",
    "section",
    "section"
  ); //!returns an obj that starts with key 0.not an array
  const inbox = asideNodes[0];
  inbox.classList.add("inbox");
  const today = asideNodes[1];
  today.classList.add("today");
  const thisWeek = asideNodes[2]
  thisWeek.classList.add("thisWeek");
  const project = asideNodes[3];
  project.classList.add("project");
  inbox.textContent = "Inbox";
  today.textContent = "Today";
  thisWeek.textContent = "This Week";
  project.textContent="Project"
}

function makeMainContent() {



}

function main() {
  const newDom = new dom();
  const newStorage = new storage();
  const nodes = makeDom(newDom);
  headerContent(newDom, nodes);
  mainContent(newDom, nodes);
}

const run = main();
