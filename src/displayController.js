const display = (() => {
  let _page = null;
  // *https://fontawesome.com/v5.15/icons/check-double?style=solid for the logo .give credit

  // const page=document

  // *todo make some working prototype till evening

  function makeDom(page) {
    _page = page;
    return page.structure();
  }

  function _addNodeOn(parentDiv, ...type) {
    return _page.appendNodeOn(parentDiv, ...type);
  }

  function _addNodeBefore(parentDiv, type) {
    return _page.prependNodeOn(parentDiv, type);
  }
  function headerChildOn(headerDiv) {
    const title = _addNodeOn(headerDiv, "div", "div");
    title[0].innerHTML = "<i class='fas fa-check-double'></i>"; //!returns an obj that starts with key 0 not an array
    title[0].classList.add("logo");
    title[1].textContent = "Todo List";
    title[1].classList.add("title");
  }

  function mainChildOn(mainDiv) {
    const body = _addNodeOn(mainDiv, "aside", "div"); //!returns an obj that starts with key 0.not an array
    const asideDiv = body[0];
    let main = body[1];
    main.setAttribute("id", "main");
    _asideContentOn(asideDiv);
    const projectPreview = _addNodeOn(main, "div");
    projectPreview[0].classList.add("projectPreview");
    projectPreview[0].textContent = " ";
    console.log(projectPreview);
  }

  function displayTodo(main) {
    const container = _addNodeOn(main, "div");
    const todo = container[0];
    return todo;
  }

  function mainHeader(main) {
    const container = _addNodeOn(main, "div");
    const header = container[0];
    header.classList.add("mainHeader");
    return header;
  }

  function _asideContentOn(asideDiv) {
    const asideNodes = _addNodeOn(
      asideDiv,
      "section",
      "section",
      "section",
      "section",
      "section"
    ); //!returns an obj that starts with key 0.not an array
    const inboxDiv = asideNodes[0];
    inboxDiv.classList.add("inbox");
    inboxDiv.classList.add("asideText");
    const todayDiv = asideNodes[1];
    todayDiv.classList.add("today");
    todayDiv.classList.add("asideText");
    todayDiv.setAttribute("data-isSelected", "yes");
    const thisWeekDiv = asideNodes[2];
    thisWeekDiv.classList.add("thisWeek");
    thisWeekDiv.classList.add("asideText");

    const projectDiv = asideNodes[3];
    projectDiv.classList.add("project");
    const wrapProjectsDiv = asideNodes[4];
    wrapProjectsDiv.classList.add("container");

    inboxDiv.innerHTML = `<i class="fas fa-inbox"></i> Inbox`;
    todayDiv.innerHTML = `<i class="fas fa-calendar-day"></i> Today`;
    thisWeekDiv.innerHTML = "<i class='fas fa-calendar-week'></i>This Week";
    projectDiv.textContent = "Project";
    _projectChildOn(wrapProjectsDiv);
    _addProjecForm(wrapProjectsDiv);
  }

  function _projectChildOn(wrappingDiv) {
    const divNode = _addNodeOn(wrappingDiv, "div");
    const addProject = _addNodeBefore(divNode[0], "div");
    addProject.textContent = "Add Project";
    addProject.classList.add("asideText");

    addProject.setAttribute("id", "addProject");
  }

  function _addProjecForm(container) {
    const form = _addNodeBefore(container, "div");
    const input = _addNodeOn(form, "input")[0];
    const button = _addNodeOn(form, "button")[0];
    button.classList.add("asideText");
    button.classList.add("button");

    input.classList.add("form");
    input.classList.add("asideText");
    input.classList.add("projectName");

    button.textContent = "Add to-do";
    // add[0].classList.add("form")
    // form.textContent="hello world"
  }

  return { makeDom, headerChildOn, mainChildOn, displayTodo, mainHeader };
})();

const onClickCategories = () => {
  const inboxNode = document.querySelector(".inbox");
  const todayNode = document.querySelector(".today");
  const thisWeekNode = document.querySelector(".thisWeek");
  const categories = [inboxNode, todayNode, thisWeekNode];
  const projectPreview = document.querySelector(".projectPreview");

  const _selected = (node) => {
    let alreadySelected;
    categories.forEach((category) => {
      return category.getAttribute("data-isSelected") === "yes"
        ? (alreadySelected = category)
        : console.log("no selected found");
    });
    alreadySelected !== undefined
      ? alreadySelected.removeAttribute("data-isSelected")
      : console.log("ERROR WHIILE REMOVING SELECTED");
    node.setAttribute("data-isSelected", "yes");
  };
  const _addheader = (node) => {
    projectPreview.textContent="";
    const header = display.mainHeader(projectPreview);
    header.textContent = node.textContent;
  };
  inboxNode.onclick = () => {
    _selected(inboxNode);
    _addheader(inboxNode);
  };

  todayNode.onclick = () => {
    _selected(todayNode);
    _addheader(todayNode);
  };
  thisWeekNode.onclick = () => {
    _selected(thisWeekNode);
    _addheader(thisWeekNode);
  };
};

export { display, onClickCategories };
