'use strict';
const creator = (schema, domElIdForInsert) => {
  const node = document.getElementById(domElIdForInsert);
  const element = document.createElement(schema.tagName);
  for(const name in schema.attributes) {
    element.setAttribute(name, schema.attributes[name]);
  }
  node.appendChild(element);
  console.dir({ node, element, schema });
  return true;
};

export { creator };
