
function getNameAndDisplay() {
    // prompt the user to input name
    let name = prompt("Name please: ");
    // use this input to change the text of the h1 using...
    $("#title").html("Hello, " + name);
}

// Attach a click handler to the button within the JS file
$("#my-button").click(getNameAndDisplay);
// $("#my-button").click(function() {
//     console.log("click")
// });

