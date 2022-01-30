const http = new easyHTTP;
// GET POST
http.get('https://jsonplaceholder.typicode.com/posts',

function(err,posts){
   if(err) {
      console.log(err);
   } else {
      console.log(posts);
   }
});

// POST 
//  create data
const data = {
   title : 'Custom Data',
   body : 'this is a custom data'
};

// post req
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
   if(err){
      console.log(err);
   }else {
      console.log(post);
   }
});

// Update the data 
http.put('https://jsonplaceholder.typicode.com/posts/1',
data,function(err,post){
   if(err){
      console.log(err);
   }else {
      console.log(post);
   }
});


// delete req
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err,response){
   if(err) {
      console.log(err);
   } else {
      console.log(response);
   }
});
