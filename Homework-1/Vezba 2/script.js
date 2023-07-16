// The Age Calculator

var birth_year = 1996;
var future_year = 2053;

var age = future_year - birth_year;

var result = ' I will be either ' + age + ' or ' + (age +1) + ' in ' + future_year;

var result = `I will be either ${age} or ${age+1} in ${future_year}.`;

console.log(result);