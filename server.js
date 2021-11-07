'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const api = new Map();
const apiPath = './api/';

const cachFile = (name) => {
  const filePath = apiPath + name;
  const key = path.basename(filePath, '.js');
  try {
    const method = require(filePath);
    api.set(key, method);
  } catch (e) {
    api.delete(key);
    console.error(e);
  }
  
  try {
  
  } catch (e) {
    console.error(e);
    return;
  }
  
};

const cachFolder =  (path) => {
  fs.readdir(path, (err, files) => {
    if(err) return;
    files.forEach(cachFile);
  });
};

cachFolder(apiPath);

const server = http.createServer(async (req, res) => {
  console.dir({ api });
  //const tasks = api.get('read');
  //console.log(await api.get('read')('task', 'all'));
  const task = await api.get('task')('task1', 'Oleg', 'date');
  console.log(await api.get('add')('task', {name: 'task1', worker: 'Oleg', date: 'date'}));
  console.log(await api.get('read')('task', 'all'));
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`Server run on: ${PORT}`);
});