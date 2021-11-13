'use strict';

const buildApi = (apiName) = {
  const api = {};
  api[apiName] = (...args) = new Promises((resolve, reject) => {
    const url = `/api/${apiName}`;
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //mode: 'cors',
      body: JSON.stringify(args),
      }
    ).then((res) => {
      const { status } = res;
      if (status !== 200) {
        reject (new Error(`Status Code: ${status}`));
        return;
      }
        resolve(res.json());
    });
  });
  return api;
};

const api = buildApi('read');
api.read('h', 'g');
