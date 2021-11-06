'use strict';

const Task = require('../api/task.js');
const add = require('../api/add.js');
const edit = require('../api/edit.js');
const del = require('../api/del.js');

const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

(async ()=>{
  let task = new Task('task1', 'oleg1', '3-12-1979');
  console.log(await add('task', task));
 
  task = new Task('task2', 'oleg2', '3-12-1979');
  console.log(await add('task', task));
 
  task = new Task('task3', 'oleg3', '3-12-1979');
  console.log(await add('task', task));
   
  task = new Task('task4', 'oleg4', '3-12-1979');
  console.log(await add('task', task));
 
  //task = new Task('task4', 'oleg4', '3-12-1979');
  console.log(await add('task', new Task('task5', 'oleg5', '3-12-1979')));
 
  console.dir(memoryTasks);
  
  console.log(await del('task', 2));
  console.dir(memoryTasks);
  
  task = new Task('task6', 'oleg6', '3-12-1979');
  console.log(await add('task', task));
  console.dir(memoryTasks);
  
  task = new Task('task11', 'oleg11', '3-12-1979');
  console.log(await edit('task', 1, task));
  console.dir(memoryTasks);
  
  console.dir(JSON.stringify(memoryTasks));
})();
