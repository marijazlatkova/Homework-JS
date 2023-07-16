let education_completed = "Bachelor's degree";
let average_salary = "1000€";

switch(education_completed) {
    case "Middle school diploma":
        average_salary = "300€";
        break;
    case "High school diploma":
        average_salary = "500€";
        break;
    case "Associate's degree":
        average_salary = "700€";
        break;  
    case "Bachelor's degree":
        average_salary = "1000€";
        break;
    case "Master's degree":
        average_salary = "1700€";
        break; 
    case "Professional degree":
        average_salary = "2500€";
        break;
    case "Doctoral degree":
        average_salary = "3000€";
        break;
}

console.log("The average salary in my country with a " + education_completed + " is " + average_salary);

console.log(`The average salary in my country with ${education_completed} is ${average_salary}.`);