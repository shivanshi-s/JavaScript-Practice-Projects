document.getElementById('btn').addEventListener('click',loadData);

function loadData() {
   // create an XHR object - instantiating the object
   const xhr = new XMLHttpRequest();

   // OPEN
   xhr.open('GET','data.txt',true);
   // readyState 
   console.log('READYSTATE : ', xhr.readyState);

   // optional - used for spinners/loaders - thinking, processsing rS 3
   // xhr.onprogress = function() {
   //    console.log('READYSTATE : ', xhr.readyState);
   // }


   xhr.onload = function() {
      console.log('READYSTATE : ', xhr.readyState);
      if(this.status === 200)
      {// console.log(this.responseText);
      document.getElementById('output').innerHTML =`<h1>${this.responseText}</h1>`;
       }
   }

   xhr.onerror = function() {
      console.log('request error...');
   }

   xhr.send();
}



// .ready state values
// 0 :  req not initalized
// 1 : server connection established
// 2 : req received
// 3 : processing req
// 4 : req finished and response is ready
