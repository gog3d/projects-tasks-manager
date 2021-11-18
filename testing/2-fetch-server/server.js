'use strict';

const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const [first, second] = url.substring(1).split('/');
  console.dir({ first, second, url });
  if(first === 'api') {
    const api = {};
    
  } else {
    const path = './static/'
    const data = await fs.promises.readFile(`${path}${first}`)
    res.end(data);
  }
});

server.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});