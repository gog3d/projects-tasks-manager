'use strict';

const buttonCreate = (name, id, clickEvent) => {
  const button = document.createElement("button");
  button.innerHTML = name;
  button.setAttribute('id', id);
  button.addEventListener('click', clickEvent);
  console.log(`buton create ${name}`);
  return button;
}


export { buttonCreate };

