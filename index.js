#!/usr/bin/env node
// mechanism of this game:
//1)computer will generate a random number.
//2)user imput a number to guess a  random number.
//3)compare the computer random number and user input number and give a result.
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("welcome to the Number Guessing Game");
const answer = await inquirer.prompt([
    {
        message: "please guess a number between 1 to 5:",
        type: "number",
        name: "userGuessNumber",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
