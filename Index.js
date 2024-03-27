#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to My App.! Let's get started.");
const answer = await inquirer.prompt([
    { message: "Enter Your Fisrt Number", type: "number", name: "Firstnumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.SecondNumber);
}
else {
    console.log("Invalid Operator");
}
console.log("THANK YOU");
