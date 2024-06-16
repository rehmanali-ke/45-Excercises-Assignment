"use strict";
//Excercise No.28
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favourite_fruits = ["Mango", "Apple", "Banana"];
if (favourite_fruits.includes("Mango")) {
    console.log("I like Mango");
}
if (favourite_fruits.includes("Apple")) {
    console.log("I like Apple");
}
if (favourite_fruits.includes("Banana")) {
    console.log("I like Banana");
}
if (favourite_fruits.includes("Orange")) {
    console.log("I like Orange");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("I like Strawberry");
}
