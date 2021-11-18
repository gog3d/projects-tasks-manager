'use strict';

const obj = {name: 'Oleg'};
const obj1 = {name: 'Oleg1'};

const fetchFn = (obj) => fetch('/api/read', {
  method: 'POST',
  header: {'Content-Type': 'application/json'},
  body: JSON.stringify(obj),
});

const fetchFn2 = (obj) => new Promise((resolve, reject) => {
  fetch('/api/task', {
    method: 'POST',
    header: {'Content-Type': 'application/json'},
    body: JSON.stringify(obj),
  }).catch((e) =>{
    console.log('error ' + e);
  }).then(res => {
    resolve(res.json());
  });
});


fetchFn(obj).then((res) => {
  res.json().then(data => {
     console.log(data);
  })
});

const fn3 = fetchFn2(obj1);
fn3.then(data=>console.log(data));