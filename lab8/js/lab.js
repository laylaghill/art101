// index.js - Lab 8: Anonymous Functions and Callbacks
// Author: Layla Hill
// Date: 6 May 2024

function squared(x) {
    return (x ** 2);
}

//test function
console.log("4 squared is ", squared(4));
console.log("8 squared is ", squared(8));

//array
array = [5, 10, 15, 20, 25, 30];
console.log("My array: ", array);

//named function
let namedResult = array.map(squared);
console.log("Test squared function: ", namedResult);

//anonymous function
let anonymousResult = array.map(function(x) {
    return x-10;
})
console.log("Results of anonymous function: ", anonymousResult);