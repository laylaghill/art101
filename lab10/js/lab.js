// index.js - Lab 10: Javascript for the Web
// Author: Layla Hill
// Date: 16 May 2024

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1))+ min;
    // get a random starting inex to slic the "Lorem ipsum" text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random "Lorem Ipsum-like" text
    return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){

// get new fake dialogue
const newText = generateRandomText();

// append a new div to output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});