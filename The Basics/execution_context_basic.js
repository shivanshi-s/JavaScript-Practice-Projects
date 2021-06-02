// hello
// Learning about : GLOBAL EXECUTION CONTEXT 
//  VIA AKSHAY SAINI 
//MANAGES EXECUTION CONTENT ADDITION, DELETION VIA  : STACK.

// call stack : at the bottom it has, global excution context.

//simple program:
var n=2;
function square(num)
{
    var ans = num*num;
    return ans;
}
var square2= square(n);
var square4= square(4);