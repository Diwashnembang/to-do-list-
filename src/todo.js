export class todo {


  static TodoData(_title, _description, _date, _priority) {
    const data = {
      title: _title,
      description: _description,
      date: _date,
      priority: _priority,
    };
 
    return data;
  }

}
