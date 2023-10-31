"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Tests for equality and inequality with strings
let name2 = 'John';
console.log("Is name == 'John'? I predict True.");
console.log(name2 == 'John');
console.log("Is name != 'Jane'? I predict True.");
console.log(name2 != 'Jane');
console.log("Is name == 'john'? I predict False.");
console.log(name2 == 'john');
console.log("Is name != 'John'? I predict False.");
console.log(name2 != 'John');
// Tests using the lowercase function
let age = 25;
console.log("Is age >= 18 and age <= 30? I predict True.");
console.log(age >= 18 && age <= 30);
console.log("Is age < 18 or age > 30? I predict False.");
console.log(age < 18 || age > 30);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number2 = 10;
console.log("Is number == 10? I predict True.");
console.log(number == 10);
console.log("Is number != 5? I predict True.");
console.log(number != 5);
console.log("Is number > 5? I predict True.");
console.log(number > 5);
console.log("Is number < 20? I predict True.");
console.log(number < 20);
console.log("Is number >= 10? I predict True.");
console.log(number >= 10);
console.log("Is number <= 15? I predict True.");
console.log(number <= 15);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
console.log("Is 'mango' not in the fruits array? I predict True.");
console.log(!fruits.includes('mango'));
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple'));
