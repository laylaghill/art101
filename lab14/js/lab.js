// index.js - Lab 13: Loops
// Author: Layla Hill
// Date: 27 May 2024

maxFactors = 4;

outputEl = document.getElementById("output");

function getFactorObj() {
    let factorObj = {};
    for (let factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
    for (let num=0; num<maxNums; num++) {
        debugger;
        let outputStr = "";
        for (let factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    let max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    let factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})