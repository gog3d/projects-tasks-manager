'use strict';

export default (elementId, name, buttonId, clickEvent) => {
  const el = document.getElementById(elementId);
  const button = document.createElement("button");
  button.innerHTML = name;
  button.setAttribute('id', buttonId);
  button.addEventListener('click', clickEvent);
  el.appendChild(button);
  //console.log(`buton create ${name}`);
  return `buton create ${name}`;
}
