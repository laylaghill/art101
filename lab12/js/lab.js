// index.js - Lab 12: Conditionals
// Author: Layla Hill
// Date: 23 May 2024

//sorting function for colleges
function sortingHat(str) {
    let length = str.length;
    const numColleges = 10;
    let remainder = length % numColleges;
    if (remainder == 0) {
      return "Cowell";
    } else if (remainder == 1) {
      return "Stevenson";
    } else if (remainder == 2) {
      return "Crown";
    } else if (remainder == 3) {
      return "Merrill";
    } else if (remainder == 4) {
      return "Porter";
    } else if (remainder == 5) {
      return "Kresge";
    } else if (remainder == 6) {
      return "Oakes";
    } else if (remainder == 7) {
      return "Rachel Carson";
    } else if (remainder == 8) {
      return "College Nine";
    } else if (remainder == 9) {
      return "College Ten";
    }
}

let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let college = sortingHat(name);
    newText = "<p>You have been given " + college + ".</p>";
    document.getElementById("output").innerHTML = newText;
})