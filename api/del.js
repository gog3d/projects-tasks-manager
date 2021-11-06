'use strict';

//const memory = require('../data/memory.js');
const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

const fn = (mem, id) => {
  const obj = mem.get(id);
  if (mem.delete(id)) {
    return `${obj.name} id: ${id} deleted from ${mem.get('name')}`;
   } else {
    return `wrong id: ${id}`;
   }
};

const routing = {
  'task': async (id) => fn(memoryTasks, id),
  'project': async (id) => fn(memoryProjects, id),
};


module.exports = async (type, id) => {
  const message = await routing[type](id);
  //console.log(message);
  return message;
};
