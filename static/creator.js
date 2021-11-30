'use strict';

function creator (idName, className, schema, domElIdForInsert) {
  //console.dir({ idName, className, schema, domElIdForInsert });
  schema.attributes['id'] = idName;
  //const id = idName;
  schema.attributes['class'] = className;
  
  const node = document.getElementById(domElIdForInsert);
  const element = document.createElement(schema.tagName);
  for(const name in schema.attributes) {
    element.setAttribute(name, schema.attributes[name]);
  }
  element.setAttribute('id', idName);
  element.setAttribute('class', className);
  for(const childName of schema.childrens) {
    console.log(childName);
    if (childName !== '') {
    import(`./tags/${childName}.js`).then((sch)=>{
        console.dir(sch[Object.keys(sch)[0]])
        console.log(Object.keys(sch));
        const schem = sch[Object.keys(sch)[0]];
        creator(idName, className, schem, idName);
      });
    }
  }
  node.appendChild(element);
  //console.dir({ node, element, schema });
  
  return schema;
};

export { creator};