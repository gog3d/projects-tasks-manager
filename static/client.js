import button from './tags/button.js';
import table  from './tags/table.js';
import { creator } from './creator.js';

const buildApi = (methods) => {
  const api = {};
  for(const method of methods) {
    const url = `/api/${method}`
    api[method] = (...args) => new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        header: {'Content-Type' : 'aplication/json'},
        body: JSON.stringify(args),
      }).then((res) => {
        const { status } = res;
        if(status !== 200) {
          reject(new Error(`Server error, ststus: ${status}`));
        } else {
          resolve(res.json());
        }
      });
    });
  }
  return api;
};

const api = buildApi(['add', 'del', 'edit', 'read', 'task']);

const taskCreate = async () => {
const task = await api.task('task', 'Button', '03-12-1979');
  await api.add('task', task);
};
const readAll = async () => {
  await api.read('task', 'all');
};

button('button', 'addTask', 'button1', taskCreate);
button('button', 'readAllTask', 'button1', readAll);
console.log({ table });
//const tableEl = table();
const table1 = creator('tbId', 'tbClass', table, 'table');
//console.log(table1.insertRow('insert'));
