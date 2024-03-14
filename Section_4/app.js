"use strict";
// Refresher for modern Javascript syntax
const add = (a, b = 3) => a + b;
const printOutput = (output) => console.log(output);
printOutput(add(5));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
// Spread Operator
const hobbies = ["Sports", "Hiking"];
const activeHobbies = ["Swimming"];
activeHobbies.push(...hobbies);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const person = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const { firstName, age } = person;
const reAdd = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = reAdd(12, 34, 2, 7.9);
