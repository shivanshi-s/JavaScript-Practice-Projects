var name = prompt("Enter your name : ");

var firstChar = name.slice(0,1);

var upperCaseFirst = firstChar.toUpperCase();

var restName = name.slice(1,name.length);

restName = restName.toLowerCase();

var finalName = upperCaseFirst+restName;

alert("Hello " + finalName + "!");