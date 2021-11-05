'use strict';

//const memory = require('../data/memory.js');

const add = require('./add.js');

class Task {
  constructor (name, worker, date) {
    this.name = name;
    this.worker = worker;
    this.date = date;
  }
}

module.exports = async (name, worker, date) => {
  const task = new Task(name, worker, date);
  await add('task', task);
  return 'task added';
};