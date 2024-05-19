// index.js - Lab 11: Javascript Events and Forms
// Author: Layla Hill
// Date: 20 May 2024

// sorts the characters of a string in alphabetical order
function sortString(inputString) {
    //convert string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
// get value of input field
const userName = $("#user-name").val();
// sort it
userNameSorted = sortString(userName);
// append a new div to output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});

//task x
$("#give-date").click(function() {
    const inputDate = $("#date").val();
    $("#output").append("<p>" + inputDate + "</p>");
})