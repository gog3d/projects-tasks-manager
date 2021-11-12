'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const api = new Map();
const apiPath = './api/';

const cacheFile = (name) => {
  const filePath = apiPath + name;
  const key = path.basename(filePath, '.js');
  console.log(key);
  try {
    const libPath = require.resolve(filePath);
    delete require.cache[libPath];
  } catch (e) {
    //console.error(e);
    return;
  }
  try {
    const method = require(filePath);
    api.set(key, method);
  } catch (e) {
    api.delete(key);
    //console.error(e);
  }
};

const cachFolder =  (path) => {
  fs.readdir(path, (err, files) => {
    if (err) return;
    files.forEach(cacheFile);
  });
};

const watch = (path) => {
  fs.watch(path, (eventType, file) => {
    cacheFile(file);
    console.log(eventType);
  });
};


cachFolder(apiPath);
watch(apiPath);

const server = http.createServer(async (req, res) => {
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`Server run on: ${PORT}`);
});
