function reverseArray(arrayToInvert) {
    var invertedArray = [];
   numofLoops = arrayToInvert.length;
   for (let i=numofLoops-1 ; i>=0 ; i--)
   {
     invertedArray.push(arrayToInvert[i]);
 }
   return invertedArray;
 }
 
 function reverseArrayInPlace(arrayToInvert) {
     // calculate the length of the array
   invertArrayLength = arrayToInvert.length;
   
   // calculate half the length of the array
   numLoops = Math.floor( invertArrayLength / 2 );
  
   // loop that many times and swap the first and last elements
   for ( i = 0; i < numLoops; i++ ) {    
     // hold on to the current number
     var holdNum = arrayToInvert[i];
     
     // get the position of the swap number
     var swapPos = invertArrayLength - 1 - i;
     
     // replace the current number with the swap number
     arrayToInvert[i] = arrayToInvert[swapPos];
     
     // put the hold number into the swap number
     arrayToInvert[swapPos] = holdNum;
       }
   
   // return the inverted array
   return arrayToInvert;
 }
 
 
 console.log(reverseArray(["A", "B", "C"]));
 // → ["C", "B", "A"];
 let arrayValue = [1, 2, 3, 4, 5];
 reverseArrayInPlace(arrayValue);
 console.log(arrayValue);
 // → [5, 4, 3, 2, 1]