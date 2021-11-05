'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`Server run on: ${PORT}`);
});