'use strict';

const add = require('./add.js');

class Task {
  constructor (name, worker, date) {
    this.name = name;
    this.worker = worker;
    this.date = date;
  }
}

/*module.exports = async (name, worker, date) => {
  const task = new Task(name, worker, date);
  const message = await add('task', task);
  //console.log(message);
  return message;;
};*/

module.exports = Task;