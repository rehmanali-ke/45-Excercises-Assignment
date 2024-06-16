// Exercise No.23
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each
of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/



//Tests for equality with strings
let apple = "apple"
console.log(`"apple" is equal to "apple"`);
console.log(apple == "apple"); //true

//Tests for inequality with strings
console.log(`"apple" is equal to "Apple"`);
console.log(apple == "Apple");//false

//Testing using the lower case function

let upperCaseApple = "APPLE"
console.log(`"APPLE" is equal to apple after applying lower case`);
console.log(upperCaseApple.toLowerCase() == "apple");//true

console.log(`"APPLE" is not equal to apple after applying lower case`);
console.log(upperCaseApple.toLowerCase() != "apple");//false

/*Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to*/

let ten = 10;
let twenty = 20;

console.log("Ten is equal to 10");
console.log(ten == 10); //true

console.log("Ten is equal to 20");
console.log(ten == 20); //false

console.log("Ten is greater than 5");
console.log(ten > 5); //true

console.log("Twenty is less than 10");
console.log(twenty < 10); //false

console.log("Twenty is not equal to 5");
console.log(twenty != 5); //true

console.log("Twenty is greater than or equal to 10");
console.log(twenty >= 10); //true

console.log("Ten is less than or equal to 20");
console.log(ten <= 20); //true




/*Tests using "and" and "or" operators*/

console.log("Twenty is not equal to 10 && Twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); //true

console.log("Twenty is not equal to 10 && ten is greater than 20");
console.log(twenty != 10 && ten > 20); //false

console.log("twenty is less than 10 or Twenty is greater than 10");
console.log(twenty < 10 || twenty > 10); //true

console.log("twenty is equal to 10 or ten is equal 10");
console.log(twenty == 10 || ten == 10); //true

/*Test whether an item is in a array*/

let cities:string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log("Sialkot is included in an array");
console.log(cities.includes("Sialkot"));//false

/*Test whether an item is in a array*/

console.log("Karachi is not included in an array?");
console.log(!cities.includes("Karachi"));//false



























