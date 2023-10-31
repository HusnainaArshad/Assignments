"use strict";
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program to calculate the area of a circle given its radius.
const radius = 5; // Radius of the circle
const pi = 3.14159; // Approximation of pi
const area = pi * radius * radius; // Calculate the area using the formula A = πr^2
console.log(`The area of the circle is ${area}.`);
// Program to check if a number is even or odd.
const number = 7; // Number to be checked
if (number % 2 === 0) {
    console.log(`${number} is even.`);
}
else {
    console.log(`${number} is odd.`);
}
