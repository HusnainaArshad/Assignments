"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
const magicianNames3 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const modifiedMagicianNames = make_great([...magicianNames]);
show_magicians(magicianNames);
console.log("--------------------");
show_magicians(modifiedMagicianNames);
