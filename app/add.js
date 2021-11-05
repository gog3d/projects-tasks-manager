'use strict';

const memory = require('../data/memory.js');

const count = memory.get('count') + 1;

module.exports = (type, object) => {
  memory.set(count, object);
  memory.set('count', count);
  console.dir(memory);
};
