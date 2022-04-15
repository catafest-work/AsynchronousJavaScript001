// fetch API , see also : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch('todos/luigi.json').then((response) => {
  console.log('resolved', response)
}).catch((err) => {
  console.log('rejected', err)
})

// get data from JSON with promise chaining 

fetch('todos/luigi.json').then((response) => {
  console.log('resolved', response)
  return response.json();
}).then(data => {
  console.log(data); // show return chaining data from luigi - new method rather than older way with xml http request 
}).catch((err) => {
  console.log('rejected', err)
})