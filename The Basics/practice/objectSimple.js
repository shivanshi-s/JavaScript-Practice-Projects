//this is a constructor

function housekeeper (name,age,work) {
    this.name = name;
    this.age = age;
    this.work =work;
}

//objects passing
var housekeeper1 = new housekeeper("jane",30,"cleaning");

console.log(housekeeper1.name);