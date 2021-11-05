'use strict';

const memory = require('../data/memory');











module.exports = async (type, id) => {
  if (memory.delete(id)) {
    return `${type} id: ${id} deleted`;
   } else {
    return `wrong ${type} id: ${id}`;
   }
};
