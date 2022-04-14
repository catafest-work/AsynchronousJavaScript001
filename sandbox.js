const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // show request states 
  console.log("request is : ",request,"request.readyState is : " ,request.readyState)

});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();