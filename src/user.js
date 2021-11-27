export class user {
  Todo(_title, _description, _date, _priority) {
    const data = {
      title: _title,
      description: _description,
      date: _date,
      priority: _priority,
    };

    return data;
  }

  project(name, dueDate) {
    return { name, dueDate };
  }
}
