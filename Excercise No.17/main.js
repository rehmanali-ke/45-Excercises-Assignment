"use strict";
// Excerise No.17
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
has changed.*/
let desiredPlace = ["Palestine", "Saudi Arabia", "Turkey", "Azerbijan", "India"];
// print in original order
console.log(`original order of list is`, desiredPlace);
// Print array in alphabetical order without modifying the actual list.
console.log(`alphabetical order list is`, desiredPlace.slice().sort());
// array is still in original order
console.log(`original order is`, desiredPlace);
// Print array in reverse alphabetical order without changing the order of the original list.
console.log(`reverse order is`, desiredPlace.slice().sort().reverse());
// Showing that array is still in its original order.
console.log(`original order after reverse sorting`, desiredPlace);
// Reverse the order of list.
desiredPlace.reverse();
console.log(`reverse order of list is`, desiredPlace);
// Reverse the order of list in its original position.
desiredPlace.reverse();
console.log(`original order of list after reversing is`, desiredPlace);
// Sort array in alphabetical order.
console.log(`sorted alphabetical order list is`, desiredPlace.slice().sort());
// sort to change array so it's stored in reverse alphabetical order
console.log(`stored in reverse alphabetical order`, desiredPlace.slice().sort().reverse());
