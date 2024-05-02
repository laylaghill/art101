// index.js - Lab 7 - Functions
// Author: Layla Hill
// Date: 3 May 2024

// sortUserName: takes the name students put and sorts the letters in alphabetical order
function sortUserName() {
  const userName = window.prompt("What is your name?");
  console.log("Your name: ", userName);
  //Split string to array
  let nameArray = userName.split("");
  console.log("Name Array: ", nameArray);
  //Sort array
  let nameArraySort = nameArray.sort();
  console.log("Sorted Name Array: ", nameArraySort);
  //Turn array back to a string
  let nameSorted = nameArraySort.join("");
  console.log("Sorted Name Array: ", nameSorted);
  //Give sorted name
  return nameSorted;
}

//Output
document.writeln("Here is your name: ", sortUserName(), "</br>");
