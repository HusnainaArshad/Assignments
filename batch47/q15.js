"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//•Print a second set of invitation messages, one for each person who is still in your list.
let guestList1 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
const guestWhoCantMakeIt = guestList[1]; // Assuming Marie Curie can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
guestList[1] = "Nikola Tesla"; // Replace Marie Curie with Nikola Tesla
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on October 31st at 7:00 PM.`);
});
