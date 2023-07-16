let age = prompt("Enter your age:");
let number = parseInt(age);

if (age >= 18) {
    console.log("You are old enough to drive a car.");
} else {
    let number_of_years = 18 - age;
    console.log("You are not old enough to drive a car. Please wait " + number_of_years + " more year(s).");
}