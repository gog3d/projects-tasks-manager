'use strict';
export default function (tagName) {
  let idCount = 0;
  return (schema) => {
    if(schema.tagName === tagName) {
      idCount++;
      const innerText = schema.attributes.innerText;
      const className = schema.attributes.className;
      schema.attributes.innerText = innerText === undefined ? `${tagName}` : innerText;
      schema.attributes.className = className === undefined ? `${tagName}Class` : className;
      schema.attributes.id = `${tagName}${idCount}`;
      const element = document.createElement(tagName);
      const attributes = schema.attributes;
      //console.dir(attributes);
      Object.assign(element, attributes);
      Object.assign(element.style, schema.style);
      element.onclick = schema.onclick;
      if(schema.childrens) {
        for(const child of schema.childrens) {
          element.appendChild(child);
        }
      }
      return element;
    } else {
      console.log(`${tagName} not aqual shema.tagName ${schema.tagName}`);
    }
  }
};
