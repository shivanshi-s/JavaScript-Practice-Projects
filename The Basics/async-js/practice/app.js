document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer() {
   const xhr = new XMLHttpRequest();
   xhr.open('GET','customer.json',true);

   xhr.onload = function() {
      if(this.status === 200){
         // parse it as an object
         const customer = JSON.parse(this.responseText);

         const output = `
         <ul>
            <li>ID : ${customer.id}</li>
            <li>NAME : ${customer.name}</li>
            <li>COMPANY : ${customer.company}</li>
         </ul>
         `
         document.getElementById('customer').innerHTML = output;
      }
   }
   xhr.send();
}
// ////////////////////////////////////////////////////////////////////////
// customers - button 2 
//  /////////////////////////////////////////////////////////////////
function loadCustomers() {
   const xhr = new XMLHttpRequest();
   xhr.open('GET','customers.json',true);

   xhr.onload = function() {
      if(this.status === 200){
         // parse it as an object
         const customers = JSON.parse(this.responseText);

         let output = '';
         customers.forEach(function(user) {
         output += `
         <ul>
            <li>ID : ${user.id}</li>
            <li>NAME : ${user.name}</li>
            <li>COMPANY : ${user.company}</li>
         </ul>
         `
         });

         document.getElementById('customers').innerHTML = output;
      }
   }
   xhr.send();
}