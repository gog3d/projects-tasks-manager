'use strict';
import { buildApi } from './apiBuilder.js';
import creator from './creator.js';
import schema from './form/schemas.js';
import buttonLog from './form/buttonSch.js';
import divLog from './form/divSch.js';
import tableCreator from './tableCreator.js';

const api = buildApi(['add', 'del', 'edit', 'read', 'task']);

const readAll = async () => {
  const rd = await api.read('task', 'all');
  console.log(JSON.stringify(rd));
  const head = ['1', '2', '3'];
  const bd = JSON.stringify(rd);//[['1dff', '2eferferf', '3erferferf'], ['1', '2', '3'], ['1', '2', '3']];
  const table1 = tableCreator()(head, bd, []);
  document.getElementById('innerDiv').appendChild(table1);
};

const taskCreate = async () => {
  const task = await api.task('task', 'Button', '03-12-1979');
  await api.add('task', task);
  await readAll();
  
};

const buttonSch1 = schema(buttonLog, 'addTask', [], taskCreate, {});
const button1 = creator('button')(buttonSch1);

const buttonSch2 = schema(buttonLog, 'readAll', [], readAll, {});
const button2 = creator('button')(buttonSch2);

const buttonSch3 = schema(buttonLog);
const button3 = creator('button')(buttonSch3);

//const head = ['1', '2', '3'];
//const body = [['1dff', '2eferferf', '3erferferf'], ['1', '2', '3'], ['1', '2', '3']];
//const table1 = tableCreator()(head, body, []);

const divSch1 = schema(divLog,'div', [button1, button2, button3], '', {});
const div1 = creator('div')(divSch1);

//console.dir(button1);

document.getElementById('innerDiv').appendChild(div1);
