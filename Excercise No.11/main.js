// Excercise No. 11
/*Greetings. Start with the array you used in Exercise 10,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be
personalized with the person’s name*/
var names = ["Athar Ali", "Muhammad Salman", "Azhar", "Waqar"];
var message = ("would you like to learn typescript?");
for (var i = 0; i < names.length; i++) {
    console.log("Hey ".concat(names[i], ", ").concat(message));
}
