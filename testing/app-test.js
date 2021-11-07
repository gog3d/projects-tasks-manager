'use strict';

const createTask = require('../api/task.js');
const add = require('../api/add.js');
const edit = require('../api/edit.js');
const del = require('../api/del.js');
const read = require('../api/read.js');

const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

(async ()=>{
  let task = await createTask('task1', 'oleg1', '3-12-1979');
  console.log(await add('task', task));
 
  task = await createTask('task2', 'oleg2', '3-12-1979');
  console.log(await add('task', task));
 
  task = await createTask('task3', 'oleg3', '3-12-1979');
  console.log(await add('task', task));
   
  task = await createTask('task4', 'oleg4', '3-12-1979');
  console.log(await add('task', task));
  
  //task = new Task('task4', 'oleg4', '3-12-1979');
  console.log(await add('task', await createTask('task5', 'oleg5', '3-12-1979')));
  
//  console.dir(memoryTasks);
  
  console.log(await del('task', 2));
  //console.dir(memoryTasks);
  
  task = await createTask('task6', 'oleg6', '3-12-1979');
  console.log(await add('task', task));
  //console.dir(memoryTasks);
  
  task = await createTask('task11', 'oleg11', '3-12-1979');
  console.log(await edit('task', 1, task));
  
  
  console.dir(await read('task', 'all'));
  console.dir(await read('task', 3));
})();
