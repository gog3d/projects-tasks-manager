'use strict';

//const memory = require('../data/memory.js');
const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

const fn = (mem, object) => {
  const count = mem.get('count') + 1;
  mem.set(count, object);
  mem.set('count', count);
  return `${object.name} added to ${mem.get('name')}`
};

const routing = {
  'task': async (object) => fn(memoryTasks, object),
  'project': async (object) => fn(memoryProjects, object),
};


module.exports = async (type, object) => {
  const message = await routing[type](object);
  //console.log(message);
  return message;
};
