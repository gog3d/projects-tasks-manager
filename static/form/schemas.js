'use strict';
//export default function (schemaLog) {
//  return (innerText, childrens, onclick, events) => {
export default function (schemaLog, innerText, childrens, onclick, events) {
  const sch = schemaLog;
  sch.attributes.innerText = innerText;
  sch.childrens = childrens;
  sch.onclick = onclick;
  sch.events = events;
  return sch;
};
