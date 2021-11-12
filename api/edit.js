'use strict';

//const memory = require('../data/memory.js');
const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

const fn = (mem, id, object) => {
  const oldObj = mem.get(id);
  if (oldObj) {
    mem.set(id, object);
    return `memory ${mem.get('name')} id: ${id} edit to ${object.name}`;
  } else {
    return `wrong id: ${id}`;
  }
};

const routing = {
  'task': async (id, object) => fn(memoryTasks, id, object),
  'project': async (id, object) => fn(memoryProjects, id, object),
};

module.exports = async (type, id, object) => {
  const message = await routing[type](id, object);
  //console.log(message);
  return message;
};
