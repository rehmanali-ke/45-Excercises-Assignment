"use strict";
// Excercise No.14
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let guests = ["Muhammad Salman", "Athar Ali", "Waqar"]; // in this list last one is unable to attend.
// This is the message to that person who can't come.
let unableAttend = guests.splice(2, 1);
console.log(`Hey ${unableAttend}, I just heard you can't come for dinner.`);
guests.push("Abid"); //Modify the list from waqar to Abid
console.log(guests);
// message to each person
guests.forEach(guest => {
    console.log(`Hey ${guest}, you are invited for dinner on 10.03.2023`);
});
