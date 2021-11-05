'use strict';

const memory = new Map();

let count = 0;
memory.set('count', count);

/*
const task = { name: 'task1', worker: 'Oleg', date: 'date' };

count = memory.get('count');

memory.set(count, task);
memory.set('count', count);

console.dir(memory);
*/
module.exports = memory;
