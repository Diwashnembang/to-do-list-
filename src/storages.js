/*  
*collets the project and todo from respective class and merge it 
!{
    !projectName:{
    !   name:name,
    !   discription:discription,
    !   date:date;
    !   priotiy:priority,
    !}
!}

*/

export class storage {
  constructor() {
    this.storage = [];
  }

  #mergeToDoAndProject(projectName, todoData) {
    const newData = {};
    newData[projectName] = todoData;
    return newData;
  }

  store() {
    let data = this.#mergeToDoAndProject();
    this.storage.push(data);
  }
}
