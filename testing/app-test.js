'use strict';

const task = require('../api/task.js');
const add = require('../api/add.js');
const del = require('../api/del.js');
const memory = require('../data/memory');
const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

(async ()=>{
  await task('task1', 'oleg1', '3-12-1979');
  await task('task2', 'oleg2', '3-12-1979');
  await task('task3', 'oleg3', '3-12-1979');
  await task('task4', 'oleg4', '3-12-1979');
  console.dir(memoryTasks);
  await del('task', 2);
  console.dir(memoryTasks);
  await task('task4', 'oleg4', '3-12-1979');
  console.dir(memoryTasks);
})();
