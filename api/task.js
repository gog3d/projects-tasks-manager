'use strict';

class Task {
  constructor(name, worker, date) {
    this.name = name;
    this.worker = worker;
    this.date = date;
  }
}

module.exports = async (name, worker, date) => {
  const task = new Task(name, worker, date);
  return task;
};
