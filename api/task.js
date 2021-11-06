'use strict';

const add = require('./add.js');

class Task {
  constructor (name, worker, date) {
    this.name = name;
    this.worker = worker;
    this.date = date;
  }
}

module.exports = Task;