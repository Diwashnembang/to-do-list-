const display = (() => {
  // *https://fontawesome.com/v5.15/icons/check-double?style=solid for the logo .give credit

  let _page = null;
  // const page=document

  // *todo make some working prototype till evening

  function makeDom(page) {
    _page = page;
    return page.structure();
  }

  function _addNodeOn(parentDiv, ...type) {
    return _page.appendNodeOn(parentDiv, ...type);
  }

  function _addNodeBefore(parentDiv,type){
    return _page.prependNodeOn(parentDiv,type);

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
    const main = body[1];
    main.setAttribute("id", "main");
    _asideContentOn(asideDiv);
    main.textContent = " ";
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
  }

  function _projectChildOn(wrappingDiv) {
    const divNode=_addNodeOn(wrappingDiv,"div");
    const addProject=_addNodeBefore(divNode[0],"div");
    addProject.textContent="Add Project"
    addProject.classList.add("asideText")


  }

  return { makeDom, headerChildOn, mainChildOn };
})();
export { display };
