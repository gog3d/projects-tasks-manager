'use strict';

const crypto = require('crypto');
const id1 = crypto.randomBytes(16).toString('hex');
const id2 = crypto.randomUUID();
console.log({ id1, id2 });
