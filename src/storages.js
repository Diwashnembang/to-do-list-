

export class storage {
  constructor() {
    this.storage = [{"demo":{
        todos:{
            todo0:"this is first to do ",
            todo1:"this is the second to do"
        },
        discrioption:"this is demo"
    }},];
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


#enumerateTodos(projectName){
  let count=-1;
  for(let i =0; i<this.storage.length;i++){
    if(Object.keys(this.storage[i])[0]===projectName){
      for (const key in this.storage[i][projectName].todos) {
        console.log("this are the keys ",key)
       count++


    }
  }

}
  return count;
}
  #formatData(projectName, task, discription, priority,date) {
    const object = {};
    const todos = {};
    const todo = {};

    object[projectName] = todos;
    object[projectName].todos = todo;
    //enumarate todos storage[]
   
    let totalTodos = this.#enumerateTodos(projectName);
    console.log("this si totalTodos",totalTodos);
    for(let i =0; i<this.storage.length;i++){
      if(Object.keys(this.storage[i])[0]===projectName){
        for (const key in this.storage[i][projectName].todos) {
          object[projectName].todos[key] =
            this.storage[i][projectName].todos[key];

      }
  }
}
    object[projectName].todos[`todo${totalTodos+1}`] = task;
    
    object[projectName].discription = discription;
    object[projectName].priority = priority;
    object[projectName].date = date;
    
    return object;
  }


  // todo : add a way to edit the data and add date also
  // * use JSON.stringyfy to compare two object

  store(projectName,task, discription, priority,date) {
    let data = this.#formatData(projectName, task, discription, priority,date);
    this.storage.push(data);

    // this.storage[0]=data;
  }
}
