//Excercise No.10
/*Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
var names = ["Athar Ali", "Muhammad Salman", "Azhar", "Waqar"];
//this is simple method by printing the names separately in list form using index.
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//this is advance method wherein we can print the names in list form by using looping over an array.
for (var idx = 0; idx < names.length; idx++) {
    console.log(names[idx]);
}
