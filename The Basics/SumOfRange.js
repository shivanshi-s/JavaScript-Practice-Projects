/* Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. 
Run the example program and see whether it does
indeed return 55.

*/
function range(start,end,increment=1) {
    var result = [];
    
    // calculate the number of times to loop (this is because you might be going 
    // up or down with your increment)
    numLoops = Math.abs( (end - start)/ increment ) + 1 ;
    
    for (var i =0; i<numLoops; i++) {
      result.push(start);
      start += increment; }
    return result; 
  }
  
  function sum(numArray) {
     // set a variable to hold the sum
    var arrayTotal = 0;
    
    // see how many numbers are in the array
    numLoops = numArray.length;
    
    //loop that many times
    for (var i=0; i<numLoops; i++)
    {
       // add the number at that index to the sum
      arrayTotal += numArray[i];
    }
    return arrayTotal; 
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55