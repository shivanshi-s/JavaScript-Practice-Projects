function bmiCalculator(weight,height)
{
    var bmi = weight/(height*height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(7100442,1930);

console.log(bmi);

