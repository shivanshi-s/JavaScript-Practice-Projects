/*
http://eloquentjavascript.net/04_data.html
The == operator compares objects by identity. 
But sometimes, you would prefer to compare the values of their actual properties.
Write a function, deepEqual, that takes two values and 
returns true only if they are the same value or are objects 
with the same properties whose values are also equal when compared 
with a recursive call to deepEqual.
To find out whether to compare two things by identity 
(use the === operator for that) or by looking at their properties,
 you can use the typeof operator. If it produces "object" for both 
 values, you should do a deep comparison. But you have to take one 
 silly exception into account: by a historical accident, typeof null
  also produces "object".
*/

function deepEqual( obj1, obj2 ) {
    // Check if both values are equivalent
    if( obj1 === obj2 ) return true;
    
    if( obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object" ) return false;
  
    var propsObj1 = 0, propsObj2 = 0;
  
    for( var prop in obj1 )
      propsObj1++;
  
    for( var prop in obj2 ) {
      propsObj2++;
  
      if( !(prop in obj1) || !deepEqual( obj1[prop], obj2[prop] ) )
        return false;
    }
    
    return propsObj1 === propsObj2;
  }
  
  var obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true