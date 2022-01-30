const http = new easyHTTP;
// user data
const data = {
   name : 'John Doe',
   username : 'johndoe',
   email : 'john@gmail.com'
}

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
   .then(data => console.log(data))
   .catch(err => console.log(err));

// Create users
http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));

// update post
http.put('https://jsonplaceholder.typicode.com/users/1',data)
   .then(data => console.log(data))
   .catch(err => console.log(err));

//  delete post
http.delete('https://jsonplaceholder.typicode.com/users/1')
   .then(data => console.log(data))
   .catch(err => console.log(err));