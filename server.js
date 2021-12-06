'use strict';

const http = require('http');
const fs = require('fs');
const { readFile } = require('fs/promises');
const path = require('path');

const PORT = 8000;

const api = new Map();
const apiPath = './api/';

const cacheFile = (name) => {
  const filePath = apiPath + name;
  const key = path.basename(filePath, '.js');
  //console.log(key);
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

setTimeout(()=>{}, 1000);

const server = http.createServer(async (req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const [first, second] = url.substring(1).split('/');
  console.log({ first, second });
  if(first === 'api') {
   // const result = await api[second];
    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', async () => {
      const data = Buffer.concat(body).toString();
      const args = JSON.parse(data);
      //console.log({ args });
      const method = api.get(second);
      const result = await method(...args);
      if(result === undefined){
        console.log(`Result undefined, error arguments ${args} method  ${method.name}`);
        res.end(JSON.stringify("Result undefined, error arguments"));
      } else {
        res.end(JSON.stringify(result));
      }
    });
    //res.end(JSON.stringify({name: 'server hello'}));
  } else if(first === 'form') {
    const data = await fs.promises.readFile(`static/${first}/${second}`);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('content-type', 'application/javascript; charset=UTF-8');
    res.end(data);
  } else {
    if (first.split('.')[1] === 'html') {
      const data = await fs.promises.readFile(`static/${first}`);
      //res.setHeader('X-Content-Type-Options', 'nosniff');
      res.end(data);
    } else {
      const data = await fs.promises.readFile(`static/${first}`);
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('content-type', 'application/javascript; charset=UTF-8');
      res.end(data);
   }
  }
});

server.listen(PORT, () => {
  console.log(`Server run on: ${PORT}`);
});
