// fetch API , see also : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
/*
fetch('todos/luigi.json').then((response) => {
  console.log('resolved', response)
}).catch((err) => {
  console.log('rejected', err)
})

// get data from JSON with promise chaining 

fetch('todos/luigi.json')// 1. fetch data 
 .then((response) => { // 2. then ...
  console.log('resolved', response)
  return response.json(); // ... take the response 
}).then(data => { // 3. access the data from this response  
  console.log(data); // show return chaining data from luigi - new method rather than older way with xml http request 
}).catch((err) => { // 4. catch the errors 
  console.log('rejected', err)
})
*/
// async and await example  versus source code from abrove with throwing Errors

const getTodos = async () => { // async function always returns a promise
  const response = await fetch('todos/luigi.json'); // this await the promise
  //console.log(response);
  if (response.status !== 200) // throwing Errors when the fetch argument is not valid
  {
    throw new Error('... cannot fetch the data!'); // this throw the error to the .catch area and finally show this message: 'rejected error :  ... cannot fetch the data!'
  }
  const data = await response.json(); // parse the promise data like JSON
  return data; // return the promise data
};

const test = getTodos()
  .then(data => { console.log('resolved : ', data)}) // .then(data => { console.log('resolved : ', data[2].author)})
  .catch(err => { console.log('rejected error : ', err.message)}); // if the JSON file is invalid will get this : 'rejected error : ' message error.

console.log(test);


