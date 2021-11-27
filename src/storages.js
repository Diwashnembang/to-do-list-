export class storage {
  constructor() {
    this.project = [];
  }
  /*  
    *collets the project and todo from respective class and merge it 
    !{
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

  #enumerateTodos(projectName) {
    let count = -1;
    for (let i = 0; i < this.project.length; i++) {
      if (Object.keys(this.project[i])[0] === projectName) {
        for (const key in this.project[i][projectName].todos) {
          count++;
        }
      }
    }
    return count;
  }

  #formatData(projectName, task, discription, priority, date) {
    const object = {};
    const todos = {};
    const todo = {};
    const update = () => {
      for (let i = 0; i < this.project.length; i++) {
        for (const key in this.project[i]) {
          if (key === projectName) {
            return this.project[i];
          }
        }
      }
      return false;
    };

    const project = update();
    if (project) {
      let totalTodos = this.#enumerateTodos(projectName);

      project[projectName].todos[`todo${totalTodos + 1}`] = task;

      project[projectName].discription = discription;
      project[projectName].priority = priority;
      project[projectName].date = date;
    } else {
      object[projectName] = todos;
      object[projectName].todos = todo;
      //enumarate todos storage[]

      let totalTodos = this.#enumerateTodos(projectName);

      for (let i = 0; i < this.project.length; i++) {
        if (Object.keys(this.project[i])[0] === projectName) {
          for (const key in this.project[i][projectName].todos) {
            object[projectName].todos[key] =
              this.project[i][projectName].todos[key];
          }
        }
      }
      object[projectName].todos[`todo${totalTodos + 1}`] = task;

      object[projectName].discription = discription;
      object[projectName].priority = priority;
      object[projectName].date = date;
      this.project.push(object);
      console.log("aftetr", this.project);
    }
    return object;
  }

  // todo : add a way to edit the data and add date also
  // * use JSON.stringyfy to compare two object

  store(projectName, task, discription, priority, date) {
    let data = this.#formatData(projectName, task, discription, priority, date);
  }
}
