"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.// • Print a new set of invitation messages, one for each person in your list.
let guestList2 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
const guestWhoCantMakeIt1 = guestList[1]; // Assuming Marie Curie can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
guestList[1] = "Nikola Tesla"; // Replace Marie Curie with Nikola Tesla
console.log("Good news! We found a bigger dinner table.");
guestList.unshift("Isaac Newton"); // Add Isaac Newton to the beginning of the array
guestList.splice(2, 0, "Ada Lovelace"); // Add Ada Lovelace to the middle of the array
guestList.push("Grace Hopper"); // Append Grace Hopper to the end of the array
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on October 31st at 7:00 PM.`);
});
