'use strict';

const memoryTasks = new Map();

let count = 0;

memoryTasks.set('count', count);
memoryTasks.set('name', 'memoryTasks');

module.exports = memoryTasks;
