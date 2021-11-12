'use strict';

const buildApi = (apiName) = {
  const api = {};
  api[apiName] = (...args) = new Promises((resolve, reject) => {
    const url = `/api/${apiName}`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
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
};

buildApi('hello');
