'use strict';

//const memory = require('../data/memory.js');
const memoryTasks = require('../data/memoryTasks.js');
const memoryProjects = require('../data/memoryProjects.js');

const readAll = (mem) => {
  const obj = {};
  for (const [key, value] of mem) {
    obj[key] = value;
    //console.dir({ key, value });
  }
  return obj;
};

const readId = (mem, id) => {
  if (mem.has(id)) {
    const obj = mem.get(id);
    return  obj;
  } else {
    console.err(`wrong id: ${id}`);
    return;
  }
};

const read = (mem, id) => {
  if (id === 'all') {
    return readAll(mem);
  } else {
    return readId(mem, id);
  }
};

const routing = {
  'task': async (id) => read(memoryTasks, id),
  'project': async (id) => read(memoryProjects, id),
};

module.exports = async (type, id) => {
  console.log({ type, id });
  const obj = await routing[type](id);
  //console.log(obj);
  return obj;
};
