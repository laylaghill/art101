// index.js - Lab 9: libraries & jQuery
// Author: Layla Hill
// Date: 11 May 2024

//add buttons
$("#challenge").append("<button id='challenge-button'>Make Special</button");
$("#problems").append("<button id='problems-button'>Make Special</button");
$("#results").append("<button id='results-button'>Make Special</button");



//add an event listener
$("#challenge-button").click(function(){
    $("#challenge").toggleClass("special");
});
$("#problems-button").click(function(){
    $("#problems").toggleClass("special");
});
$("#results-button").click(function(){
    $("#results").toggleClass("special");
});