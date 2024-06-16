"use strict";
//Excercise No.39
/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/
function make_album(artist, title) {
    return { artist, title };
}
;
let album1 = make_album("Zafar Ali", "Jhoom");
let album2 = make_album("Sonu Nigam", "Jaan");
let album3 = make_album("Atif Aslam", "Jal Pari");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of Tracks
function make_album2(artist, title, tracks) {
    return { artist, title, tracks };
}
let album4 = make_album2("Sajjad Ali", "Chief Saab", 10);
let album5 = make_album2("Hadiqa Kiani", "Asmaan", 12);
console.log(album4);
console.log(album5);