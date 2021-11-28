'use strict';

const schemaTable = {
  tagName: 'table',
  childrens: ['thead', 'tbody', 'tfoot'],
  attributes: {
    id: '',
    'class': '',
  },
  properties: {},
  insertRow: function(x) {return this.attributes.id + x},
};

export { schemaTable };
