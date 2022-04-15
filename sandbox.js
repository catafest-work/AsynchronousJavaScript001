// -- basic example 

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // show request states 
  console.log("request is : ",request,"request.readyState is : " ,request.readyState)
  // after get last status then data can be used 
  if(request.readyState === 4) {
    console.log(request.responseText)
  }
});
// this URL provide free fake API for testing and prototyping.
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

// -- basic example with if else for status 
const bad_URL_request = new XMLHttpRequest();

bad_URL_request.addEventListener('readystatechange', () => {
  // show request states 
  console.log("bad_URL_request is : ",bad_URL_request,"bad_URL_request.readyState is : " ,request.readyState)
  // after get last status then data can be used 
  if(bad_URL_request.readyState === 4 && bad_URL_request.status === 200) {
    console.log(bad_URL_request.responseText)
  } else if(bad_URL_request.readyState === 4) {
    console.log('could not fetch the data');
  }
});
// this bad URL provide for testing 
bad_URL_request.open('GET', 'https://jsonplaceholder.typicode.com/todossssssssssssss/');
bad_URL_request.send();


//  testing with data come back after console log 

const getTodos = (callback) => {
  const requestErr = new XMLHttpRequest();

  requestErr.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200)
    {
      callback(undefined, requestErr.responseText);
    } else if (request.readyState === 4){ 
      callback('coud not fetch data', undefined);
    }
  });

  // bad URL for testing 
  //requestErr.open('GET', 'https://jsonplaceholder.typicode.com/todosss');
  // fix bad URL for console and response getTodos
  requestErr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  /* using a good URL will result this output in this order for all source code: 
  request is :  XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, ...
  bad_URL_request is :  XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0,  ...
  1
  2
  3
  4
  request is :  XMLHttpRequest {onreadystatechange: null, readyState: 2, timeout: 0,
  request is :  XMLHttpRequest {onreadystatechange: null, readyState: 3, timeout: 0,
  request is :  XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0,
  [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }, ...
  GET bad_URL_request.open('GET', 'https://jsonplaceholder.typicode.com/todossssssssssssss/'); 404
  bad_URL_request is : 
  ... 
*/
  requestErr.send();  
  };

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired');
  if(err) {
    console.log(err)
    } else {
    console.log(data)
  }
});

console.log(3);
console.log(4);

// test with local JSON file

const getTodosLocalJSON = (callback) => {
  const requestLocalJSON = new XMLHttpRequest();

  requestLocalJSON.addEventListener('readystatechange', () => {
    if(requestLocalJSON.readyState === 4 && requestLocalJSON.status === 200)
    {
      callback(undefined, requestLocalJSON.responseText);
    } else if (requestLocalJSON.readyState === 4){ 
      callback('coud not fetch data', undefined);
    }
  });

  requestLocalJSON.open('GET', 'todos.json');
  requestLocalJSON.send();  
  };

console.log("Testing with a local json file ");
getTodosLocalJSON((err, data) => {
  console.log('callback fired');
  if(err) {
    console.log(err)
    } else {
    console.log(data)
  }
});


// test with multiple local json files

const getTodosLocalJSONFiles = (resource, callback) => {
  const requestLocalJSONFiles = new XMLHttpRequest();

  requestLocalJSONFiles.addEventListener('readystatechange', () => {
    if(requestLocalJSONFiles.readyState === 4 && requestLocalJSONFiles.status === 200)
    {
      callback(undefined, requestLocalJSONFiles.responseText);
    } else if (requestLocalJSONFiles.readyState === 4){ 
      callback('coud not fetch data', undefined);
    }
  });

  requestLocalJSONFiles.open('GET', resource);
  requestLocalJSONFiles.send();  
  };

console.log("Testing with many local json file ");

// calback hell - triangle of doom ... because nesting callback within callback within callback ...
getTodosLocalJSONFiles('todos/luigi.json',(err, data) => {
  console.log(data);
  getTodosLocalJSONFiles('todos/mario.json', (err,data) => {
    console.log(data);  getTodosLocalJSONFiles('todos/shaun.json', (err,data) => {
      console.log(data)
      })
    })
});

// promise example resolve 
const getSomething_resolve = () => {
  return new Promise((resolve, reject) => {
    // fetch something 
    resolve('some data');
  });
};

getSomething_resolve().then((data) => {
  console.log(data);
});


const getSomething_reject = () => {
  return new Promise((resolve, reject) => {
    // fetch something 
    reject ('some error');
  });
};
// promise example reject
getSomething_reject().then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});

// testing with include promise for our example 

const getTodosLocalJSONFilesPromise = (resource) => {
  return new Promise((resolve, reject) => {
      const requestLocalJSONFiles = new XMLHttpRequest();

      requestLocalJSONFiles.addEventListener('readystatechange', () => {
        if(requestLocalJSONFiles.readyState === 4 && requestLocalJSONFiles.status === 200)
        {
          //callback(undefined, requestLocalJSONFiles.responseText);
          const data = JSON.parse(requestLocalJSONFiles.responseText); // need to parse promise like JSON 
          resolve(data);
        } else if (requestLocalJSONFiles.readyState === 4){ 
          //callback('coud not fetch data', undefined);
          reject('error getting resource ')
        }
      });
    
      requestLocalJSONFiles.open('GET', resource);
      requestLocalJSONFiles.send(); 
    })
};

getTodosLocalJSONFilesPromise('todos/luigi.json').then(data => { // because result 'data' is the promise , and remove () because is just one.
  console.log('promised data resolved : ', data);
}).catch(err => { // same changes like data promise from the row above
  console.log('promised err rejoected : ', err);
})

// testing with chaining promises 

const getTodos_chaining_Promise = (resource) => {
  return new Promise((resolve, reject) => {
      const request_chaining_Promise = new XMLHttpRequest();

      request_chaining_Promise.addEventListener('readystatechange', () => {
        if(request_chaining_Promise.readyState === 4 && request_chaining_Promise.status === 200)
        {
          const data = JSON.parse(request_chaining_Promise.responseText); // need to parse promise like JSON 
          resolve(data);
        } else if (request_chaining_Promise.readyState === 4){
          reject('error getting resource ')
        }
      });
    
      request_chaining_Promise.open('GET', resource);
      request_chaining_Promise.send(); 
    })
};

// chaining two promises 
getTodos_chaining_Promise('todos/luigi.json').then(data => { // because result 'data' is the promise , and remove () because is just one.
  console.log('promised first data luigi resolved and show like : ', data);
  // need return this to the next one promise get from mario.js
  return getTodos_chaining_Promise('todos/mario.json');
}).then(data => { // mario.json promise result
  console.log('promised second data mario resolved and show like : ', data)
}).catch(err => { // solve error for any error 
  console.log('promised err rejected : ', err);
})

// chaining all promises returned

getTodos_chaining_Promise('todos/luigi.json')
  .then(data => { // because result 'data' is the promise , and remove () because is just one.
  console.log('chaineing promised Luigi: ', data);
  // need return this to the next one promise get from mario.json
  return getTodos_chaining_Promise('todos/mario.json');
}).then(data => { 
  // shaun.json promise result
  console.log('chaineing promised Mario: ', data)
  return getTodos_chaining_Promise('todos/shaun.json');
}).then(data => { // shaun.json promise result
  console.log('chaineing promised Shaun : ', data)
}).catch(err => { // solve error for any error 
  console.log('promised err rejected : ', err);
})
