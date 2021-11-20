import { buttonCreate } from './button.js';

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

const scenario = async () => {
  const div = document.getElementById('button');
  const clEv = async () => {
    let task = await api.task('task', 'Button', '03-12-1979');
    await api.add('task', task);
  };
  const but = buttonCreate('HELLO', 'button1', clEv);
  div.appendChild(but);
  let task = await api.task('task1', 'Oleg', '03-12-1979');
  await api.add('task', task);
  task = await api.task('task2', 'Ivan', '03-12-1979');
  await api.add('task', task);
  const readAll = await api.read('task', 'all');
  console.dir(readAll);
  let read = await api.read('task', '1');
  console.dir(read);
  read = await api.read('task', '2');
  console.dir(read);
  read = await api.read('task', '3');
  console.dir(read);
};

scenario();
