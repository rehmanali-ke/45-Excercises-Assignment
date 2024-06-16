"use strict";
//Excercise No.36
/*Large Shirts:
Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function making_Shirt(size = "Large", message = "I love TypeScript") {
    console.log(`I have ordered a ${size} size T-Shirt with message "${message}" on its front & back.`);
}
making_Shirt();
making_Shirt("medium");
making_Shirt("small", "I love GIAIC");
