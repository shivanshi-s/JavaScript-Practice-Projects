//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
   //hide results
   document.getElementById('results').style.display = 'none';
   // show loader
   document.getElementById('loading').style.display = 'block';

   setTimeout(calculateResult, 2000);

   e.preventDefault();
});


// Calculate result
function calculateResult() {

   //UI variables
   const UIamount = document.getElementById('amount');
   const UIinterest = document.getElementById('interest');
   const UIyears = document.getElementById('years');
   const UImonthly = document.getElementById('monthly-payment');
   const UItotal = document.getElementById('total-payment');
   const UItotalInterest = document.getElementById('total-interest');

   const principal = parseFloat(UIamount.value);
   const calcInterest = parseFloat(UIinterest.value)/100/12;
   const calcPayment = parseFloat(UIyears.value) * 12 ; 

   //compute monthly payment
   const x = Math.pow(1 + calcInterest , calcPayment);
   const monthly = (principal * x * calcInterest)/(x-1);

   //check finite number
   if ( isFinite(monthly)) {
      UImonthly.value  = monthly.toFixed(2);
      UItotal.value = (monthly * calcPayment).toFixed(2);
      UItotalInterest.value = ((monthly * calcPayment)- principal).toFixed(3);
     
      //show results
      document.getElementById('results').style.display = 'block';
      //hide loader
       document.getElementById('loading').style.display = 'none';
   } else {
         showError('Please check your numbers.');
      }
}

function showError(error) {
   //show results
   document.getElementById('results').style.display = 'none';
   //hide loader
    document.getElementById('loading').style.display = 'none';
   //create a div
   const errorDiv = document.createElement('div');

   //get elements 
   const card = document.querySelector('.card');
   const heading  = document.querySelector('.heading');

   //add class
   errorDiv.className = 'alert alert-danger';

   //create  a textNode and append to div
   errorDiv.appendChild(document.createTextNode(error));

   //error above the heading
   card.insertBefore(errorDiv,heading);

   //clear error
   setTimeout(clearError,2000);
}

function clearError() {
   document.querySelector('.alert').remove();
}