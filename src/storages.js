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

  #merge(projectName, todoData) {
    const newData = {};
    newData[projectName] = todoData;
    return newData;
  }

  store() {
    let data = this.#merge();
    this.storage.push(data);
  }
}
