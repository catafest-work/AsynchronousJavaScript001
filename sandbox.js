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
// this URL provide free fake API for testing and prototyping.
bad_URL_request.open('GET', 'https://jsonplaceholder.typicode.com/todossssssssssssss/');
bad_URL_request.send();