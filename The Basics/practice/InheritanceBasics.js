let shape = {
    height:'10mm',
    width:'30mm'

}
let circle = {
    radius:'10mm'
}

let triangle = {
    angle:'30'
}

circle.__proto__= shape; //circle inheriting shape
triangle.__proto__=shape;
console.log(circle.height)
console.log('triangle', triangle.width)


//example two
let netflixUser = {
    showAccess:true
}

let premiumUser = {
    ads:false
}

premiumUser.__proto__=netflixUser;

console.log(premiumUser.showAccess)