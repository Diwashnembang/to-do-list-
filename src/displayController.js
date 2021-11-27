import { storage } from "./storages";

const memory = new storage();
const display = (() => {
  let _page = null;
  // *https://fontawesome.com/v5.15/icons/check-double?style=solid for the logo .give credit

  // const page=document

  // *todo make some working prototype till evening

  function makeDom(page) {
    _page = page;
    return page.structure();
  }

  function addNodeOn(parentDiv, ...type) {
    return _page.appendNodeOn(parentDiv, ...type);
  }

  function addNodeBefore(parentDiv, type) {
    return _page.prependNodeOn(parentDiv, type);
  }
  function headerChildOn(headerDiv) {
    const title = addNodeOn(headerDiv, "div", "div");
    title[0].innerHTML = "<i class='fas fa-check-double'></i>"; //!returns an obj that starts with key 0 not an array
    title[0].classList.add("logo");
    title[1].textContent = "Todo List";
    title[1].classList.add("title");
  }

  function mainChildOn(mainDiv) {
    const body = addNodeOn(mainDiv, "aside", "div"); //!returns an obj that starts with key 0.not an array
    const asideDiv = body[0];
    let main = body[1];
    main.setAttribute("id", "main");
    _asideContentOn(asideDiv);
    const projectPreview = addNodeOn(main, "div");
    projectPreview[0].classList.add("projectPreview");
    projectPreview[0].textContent = " ";
  }

  function displayTodo(main) {
    const container = addNodeOn(main, "div");
    const todo = container[0];
    return todo;
  }

  function mainHeader(main) {
    const container = addNodeOn(main, "div");
    const header = container[0];
    header.classList.add("mainHeader");
    return header;
  }

  function _asideContentOn(asideDiv) {
    const asideNodes = addNodeOn(
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
    inboxDiv.setAttribute("data-isSelected", "yes");
    const todayDiv = asideNodes[1];
    todayDiv.classList.add("today");
    todayDiv.classList.add("asideText");
    const thisWeekDiv = asideNodes[2];
    thisWeekDiv.classList.add("thisWeek");
    thisWeekDiv.classList.add("asideText");

    const projectDiv = asideNodes[3];
    projectDiv.classList.add("projectText");
    const wrapProjectsDiv = asideNodes[4];
    wrapProjectsDiv.classList.add("container");

    inboxDiv.innerHTML = `<i class="fas fa-inbox"></i> Inbox`;
    todayDiv.innerHTML = `<i class="fas fa-calendar-day"></i> Today`;
    thisWeekDiv.innerHTML = "<i class='fas fa-calendar-week'></i>This Week";
    projectDiv.textContent = "Project";
    _projectChildOn(wrapProjectsDiv);
    const form = addProjectForm(wrapProjectsDiv);
    form.form.classList.add("addProjectForm");
  }

  function _projectChildOn(wrappingDiv) {
    // const divNode = addNodeOn(wrappingDiv, "div");
    const addProject = addNodeBefore(wrappingDiv, "div");
    addProject.innerHTML = `<i class="fas fa-plus"></i>Add Prject`;
    addProject.classList.add("asideText");

    addProject.setAttribute("id", "addProject");
  }

  function addProjectForm(container) {
    const form = addNodeOn(container, "div")[0];

    // project.classList.add("hidden")
    form.classList.add("hidden");
    const input = addNodeOn(form, "input")[0];
    const buttons = addNodeOn(form, "div")[0];
    buttons.classList.add("asideButtonContainer");
    const button = addNodeOn(buttons, "button")[0];
    const cancelbtutton = addNodeOn(buttons, "button")[0];
    button.classList.add("button");
    button.classList.add("add");

    cancelbtutton.classList.add("button");
    cancelbtutton.classList.add("cancel");

    input.classList.add("form");
    input.classList.add("asideText");
    input.classList.add("projectName");

    button.textContent = "Add";
    cancelbtutton.textContent = "Cancel";
    return { form, button, cancelbtutton, input };
  }

  // @param storage is the array and containerNode is the div that contains projects in aside
  const renderProjectList = (storage, containerNode) => {
    let projectNode;
    const _removeNode = (div) => {
      const childrens = Array.from(div.children);
      for (let i = 0; i < childrens.length; i++) {
        if (
          //!remeove everything except the form and add project text
          childrens[i].getAttribute("class") == "addProjectForm" ||
          childrens[i].getAttribute("id") == "addProject"
        ) {
          return;
        }
        console.log(childrens[i].getAttribute("id"));
        childrens[i].remove();
      }
    };
    _removeNode(containerNode);
    const projectLists = display.addNodeBefore(containerNode, "div");
    projectLists.classList.add("projectLists");
    storage.forEach((project) => {
      console.log("this is programm", project);
      if (Object.keys(project)[0] !== "Inbox") {
        projectNode = display.addNodeOn(projectLists, "div")[0];
        projectNode.textContent = Object.keys(project)[0];
        projectNode.classList.add("asideText");
      }
    });
  };

  const addTaskText = (node) => {
    const addTaskText = addNodeOn(node, "div")[0];
    addTaskText.innerHTML = `<i class="fas fa-plus"></i> Add Task  `;
    addTaskText.classList.add("asideText");
    addTaskText.setAttribute("id", "addTask");
    addTaskText.setAttribute("data-isSelected", "yes");
    // const form =_addProjectForm();
    // form.classList.add("addTaskForm");

    return addTaskText;
  };

  const taskContainer = (Node) => {
    const taskPreview = addNodeOn(Node, "div")[0];
    taskPreview.setAttribute("id", "taskPreview");
    taskPreview.textContent = " this is container";
    return taskPreview;
  };

  // const addTask = (taskContainer,task) => {
  //   const task = addNodeOn(taskContainer, "div")[0];
  //   task.classList.add("tasks");

  // };

  const renderProjectPreviewContent = (projectPreview) => {
    const todoPreview = taskContainer(projectPreview);
    const addTaskNode = addTaskText(projectPreview);
    const form = addProjectForm(projectPreview);
    form.form.classList.add("addTaskForm");
    const header = todoPreview.previousElementSibling.textContent;
    // @param (container, projectName)
    _appendTodo(todoPreview, header);
    addTaskNode.addEventListener("click", () => {
      form.form.classList.remove("hidden");
      addTaskNode.style.display = "none";
      console.log(form.input);

      // @param (addButton, container,header,todo,discription,priority,date)
      addTodoEvent(form.button, todoPreview, header, form.input);
    });

    function _appendTodo(container, projectName) {
      const _removeNode = () => {
        container.textContent = "";
      };
      //  todo : add event listner if project is clicked store with project if inbox is selected store in inbox array

      for (let i = 0; i < memory.project.length; i++) {
        if (projectName !== "thisWeek" || projectName !== "Today") {
          // *if key == projectName because project Name alreday exist if we are adding to do
          if (Object.keys(memory.project[i])[0] === projectName) {
            _removeNode(container);
            // console.log(memory.project[i][projectName].todos);
            for (const todo in memory.project[i][projectName].todos) {
              if (memory.project[i][projectName].todos[todo] === undefined)
                continue;

              const todoDiv = addNodeOn(container, "div")[0];
              todoDiv.classList.add("todo");
              todoDiv.classList.add("asideText");
              todoDiv.textContent = memory.project[i][projectName].todos[todo];
            }
          }
        }
      }
    }
    const addTodoEvent = (
      addButton,
      container,
      header,
      todo,
      discription,
      priority,
      date
    ) => {
      addButton.onclick = () => {
        //@param store(projectName,task, discription, priority,date)
        memory.store(header, todo.value, discription, priority, date);
        // @param (container, projectName; )
        _appendTodo(container, header);
      };
    };
  };

  const displayProjectList = (
    input,
    containerNode,
    addProjectFormNode,
    addProject
  ) => {
    // @param store(projectName,task, discription, priority,date)
    memory.store(input.value);
    // @param storage is the array and containerNode is the div that contains projects in aside
    renderProjectList(memory.project, containerNode);
    eventOnProjectList();
    addProjectFormNode.classList.add("hidden");
    addProject.style.display = "flex";
  };

  // const dispalySavedTodos=(projectName)=>{
  //   memory.project.forEach(project=>{

  //   })
  // }

  return {
    makeDom,
    headerChildOn,
    mainChildOn,
    displayTodo,
    mainHeader,
    addNodeOn,
    addNodeBefore,
    renderProjectList,
    addTaskText,
    taskContainer,
    addProjectForm,
    renderProjectPreviewContent,
    displayProjectList,
  };
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
    projectPreview.textContent = "";
    const header = display.mainHeader(projectPreview);
    header.textContent = node.textContent;
  };

  inboxNode.onclick = () => {
    _selected(inboxNode);
    _addheader(inboxNode);
    display.renderProjectPreviewContent(projectPreview);
    // display.addTaskText(projectPreview);
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

const eventOnProjectList = () => {
  let categories = Array.from(document.querySelector(".projectLists").children);
  const inboxNode = document.querySelector(".inbox");
  const todayNode = document.querySelector(".today");
  const thisWeekNode = document.querySelector(".thisWeek");

  categories.push(inboxNode, todayNode, thisWeekNode);
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
    projectPreview.textContent = "";

    const header = display.mainHeader(projectPreview);
    if (
      node.textContent.split(" ").join("") === "Inbox" ||
      node.textContent.split(" ").join("") === "thisWeek" ||
      node.textContent.split(" ").join("") === "Today"
    ) {
      header.textContent = node.textContent.split(" ").join("");
    } else {
      header.textContent = node.textContent;
    }
    console.log(header.textContent);
  };
  categories.forEach((project) => {
    project.onclick = () => {
      _selected(project);
      _addheader(project);
      if (
        project.textContent.split(" ")[1] === "Week" ||
        project.textContent.split(" ")[1] === "Today"
      ) {
        console.log("EXIT FROM PROJECT.ONCLICK");
      } else {
        display.renderProjectPreviewContent(projectPreview);
      }
    };
  });
};

export { display, onClickCategories, eventOnProjectList };
