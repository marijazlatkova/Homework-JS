// The Lifetime Supply Calculator

var currentAge = 26;
var maximumAge = 90;
var estimatedAmount = 3;

var totalAmount = (estimatedAmount * 365) * (maximumAge - currentAge);

var result = 'You will need ' + totalAmount + ' lifetime supply of your favourite snack until the age of ' + maximumAge;

var result = `You will need ${totalAmount} lifetime supply of your favourite snack until the age of ${maximumAge}.`;

console.log(result);
