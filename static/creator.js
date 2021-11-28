'use strict';
const creator = (idName, className, schema, domElIdForInsert) => {
  //const elementObject = schema;
  schema.attributes['id'] = idName;
  schema.attributes['class'] = className;
  
  const node = document.getElementById(domElIdForInsert);
  const element = document.createElement(schema.tagName);
  for(const name in schema.attributes) {
    element.setAttribute(name, schema.attributes[name]);
  }
  
  element.setAttribute('id', idName);
  element.setAttribute('class', className);
  
  for(const childName of schema.childrens) {
    const child = document.createElement(childName);
    element.appendChild(child);
  }
  node.appendChild(element);
  console.dir({ node, element, schema });
  
  return schema;
};

export { creator };
