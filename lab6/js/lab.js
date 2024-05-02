// index.js - Lab 6: Arrays and Objects
// Author: Layla Hill
// Date: 29 April 2024

//Define Variables
const myTransport = ["walking", "bus", "car"];

let myMainRide = {
  make: "Honda",
  model: "CR-V",
  color: "Green",
  year: 2008,
  age: function() {
    return 2024 - this.year
  }
}

//Output
document.writeln("My Wheels: " + myMainRide.color + " " + myMainRide.make + " " + myMainRide.model + "<br>");
document.writeln("Transport for college: " + myTransport[0] + " and " + myTransport[1]);