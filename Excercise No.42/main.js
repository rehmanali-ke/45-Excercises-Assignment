"use strict";
//Excercise No.42
/*Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.*/
let magicians = ["David", "Chris", "Dynamo"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
;
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
console.log(magicians);
console.log(greatMagicians);
