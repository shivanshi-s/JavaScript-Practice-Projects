// var promise = new Promise(()=> {});
// console.log(promise);

var promise = new Promise((resolve, reject) => {
    let a =1 +1;
    if(a===3){
        resolve()
    }else{
        reject()
        }
});
console.log(promise);
 