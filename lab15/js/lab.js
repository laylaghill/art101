// index.js - Lab 15: AJAX
// Author: Layla Hill
// Date: 6 June 2024

const URL = "https://api.chucknorris.io/jokes/random";

// button listener
$("#activate").click(function() {
    $.ajax(ajaxObject);
})

// ajax object
const ajaxObject = {
    url: URL,
    // data: {},
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxError,

}

// success callback
function ajaxSuccess(data) {
    console.log("Data: ", data)
    const value = data.value;
     $("#output").html(value);
}

// error callback
function ajaxError(request, error) {
    console.log("Error", request, error);
}