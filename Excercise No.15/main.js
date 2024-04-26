"use strict";
// Excercise No.15
/*More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list*/
let guests = ["Muhammad Salman", "Athar Ali", "Waqar"];
guests.forEach((guest) => {
    console.log(`Hey ${guest}, I found a bigger table for dinner so i would like to invite more guests.`);
}); // print message to each guest
// Add one new guest at beginning in array by using unshift method
guests.unshift("Abdul Lateef");
// Add one new guest in middle by using splice method
guests.splice(Math.floor(guests.length / 2), 0, "Umar");
// Add another guest in end of the list by using push method
guests.push("Faheem");
// now print to all guests for invitation
guests.forEach((guest) => {
    console.log(`Hey ${guest}, You are invited for dinner on 10.03.2024.`);
});
