// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n) {
    let a = 1, b = 0, temp;
    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    console.log(b);
    return b;
}
// console.log("Fibonacci: ");
// fib(5)

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    let temp, length = numArray.length, swapped;
    for (let i = 0; i < length - 1; i++) {
        swapped = false
        for (let j = 0; j < length - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }
    return numArray;
}
// let a = [1, 5, 3, 6];
// console.log("Bubble Sort: " + bubbleSort(a));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    let temp = "";
    length = someStr.length;
    for (let index = length - 1; index >= 0; index--) {
        temp += someStr[index];
    }
    return temp;
}
// console.log("Reverse String: " + reverseStr("apple"));

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum == 0 || someNum == 1) {
        return 1;
    } else {
        let total = 1;
        for (let index = someNum; index > 1; index--) {
            total *= index;
        }
        return total;
    }
}
// console.log("Factorial: 5 " + factorial(5));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and(offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    let temp = "";
    if (offset + length > someStr.length) {
        alert("The length is longer than the string");
    } else {
        for (let index = offset; index < offset + length; index++) {
            temp += someStr[index];
        }
    }
    return temp;
}
// console.log("Substring: apple 2, 1 " + substring("apple", 2, 1));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if ((someNum & 1) == 0) {
        return true;
    } else {
        return false;
    }
}
// console.log("isEven: " + isEven(2));

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let temp = "";
    length = someStr.length;
    for (let index = length - 1; index >= 0; index--) {
        temp += someStr[index];
    }
    if (temp == someStr) {
        return true;
    } else {
        return false;
    }
}
// console.log("isPalindrome: " + isPalindrome("racecar"));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape.**Assume the number is odd.**
// character is a String that represents the contents of the shape.Assume this String contains just one character.
// **Use a switch statement to determine which shape was passed in.**
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
//     Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character) {
    let symbol = "";

    switch (shape) {
        case "Square":
            for (let index = 0; index <= height; index++) {
                symbol = "";
                for (let x = 0; x < height; x++) {
                    symbol += character;
                }
                console.log(symbol);
            }
            break;
        case "Triangle":
            for (let index = 0; index <= height; index++) {
                symbol = "";
                for (let x = 0; x < index; x++) {
                    symbol += character;
                }
                console.log(symbol);
            }
            break;
        case "Diamond":
            let space = height - 1;
            for (let index = 0; index <= height; index++) {
                symbol = "";
                if ((index % 2) == 0) {
                    continue;
                } else {
                    for (let x = 0; x < space; x++) {
                        symbol += " ";
                    }
                    for (let x = 0; x < index; x++) {
                        symbol += character;
                    }
                    console.log(symbol);
                    space--;
                }
            }
            space += 2;
            for (let index = height - 1; index > 0; index--) {
                symbol = "";
                if ((index % 2) == 0) {
                    continue;
                } else {
                    for (let x = 0; x < space; x++) {
                        symbol += " ";
                    }
                    for (let x = 0; x < index; x++) {
                        symbol += character;
                    }
                    console.log(symbol);
                    space++;
                }
            }
            break;
        default: {
            console.log("This is not a valid option");
        }
    }
}
// printShape("Diamond", 5, "$");

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    for (let element in someObj) {
        console.log(element + " " + someObj[element]);
    }
}
// console.log("TraversObject:");
// traverseObject(a);

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length)
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}
// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// var john = new Person("John", 30);
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// var john = getPerson("John", 30);
function getPerson(name, age) {
    let a = {
        name: name,
        age: age,
    }
    return a;
}
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page.
// Please put the question itself as a comment above each answer.
// ------------------------------------------------------------------------------------------------------
// NOTE: Part II will be done twice: once with Javascript and once with jQuery.
// 	  They should be done separately.
// 	  Copy the index.html file and rename them to: indexJavascript.html and indexJQuery.html
// ------------------------------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    let collection = document.getElementsByTagName("span");
    let temp = collection[2].innerHTML;
    return temp;
}
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let collection = document.getElementsByTagName("td");
    for (let index = 0; index < collection.length; index++) {
        if (collection[index].innerHTML == "Sales") {
            console.log(collection[index - 1].innerHTML)
        }
    }
}
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let collection = document.getElementsByTagName("a");

    for (let index = 0; index < collection.length; index++) {
        temp = collection[index];
        if (temp.getElementsByTagName("span")[0]) {
            console.log(temp.getElementsByTagName("span")[0].innerHTML);
        }
        // try {
        //     console.log(temp.getElementsByTagName("span")[0].innerHTML);
        // } catch{ continue; }
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find the checked option in the 'hobbies' select element.
// Print the value and the contents.
let selection = document.getElementsByName("hobbies")[0];
selection.addEventListener("change", getHobbies);
function getHobbies() {
    let selectedValue = selection.options[selection.selectedIndex].value;
    let selectedContents = selection.options[selection.selectedIndex].text;
    console.log("Value: " + selectedValue);
    console.log("Contents: " + selectedContents);
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    let allElements = document.querySelectorAll("[data-customAttr]");
    for (let index = 0; index < allElements.length; index++) {
        console.log("Value: " + allElements[index].innerHTML + " Element: " + allElements[index].localName);

    }
}
// getCustomAttribute();

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
num1.addEventListener("change", addinputs);
num2.addEventListener("change", addinputs);

function addinputs() {
    let sum = 0;
    sum = parseInt(num1.value, 10) + parseInt(num2.value, 10);
    if (sum) {
        document.getElementById("sum").innerHTML = sum;
    } else {
        document.getElementById("sum").innerHTML = "Cannot add";
    }
}
// ******************************************************************************************************
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let skills = document.getElementsByName("skills")[0];
skills.addEventListener("change", newSkill);

function newSkill() {
    let newSkill = skills.options[skills.selectedIndex].text;
    alert("Are you sure " + newSkill + " is one of your skills?");
}

// *********************************************This is not actually changing the background color*********************************************************
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let color = document.getElementById("firstForm");
color.addEventListener("click", favColor);
let previousColor = null;
function favColor(e) {
    if (e.toElement.name === "favoriteColor") {
        let currentColor = e.toElement.value;
        if (currentColor !== previousColor) {
            // e.toElement.style.backgroundColor = currentColor;
            let x = document.getElementsByName("favoriteColor");
            for (let index = 0; index < x.length; index++) {
                x[index].style.backgroundColor = currentColor;
            }
            alert("So you like " + currentColor + " more than " + previousColor + " now?");
            previousColor = e.toElement.value;
        }
    }
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

let name = document.querySelector("table");
name.addEventListener("mouseover", hideEmployee);

function hideEmployee(e) {
    if (e.toElement.className === "empName") {
        if (e.toElement.style.color === "white") {
            e.toElement.style.color = "black";
        } else {
            e.toElement.style.color = "white";
        }
    }
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
window.addEventListener("load", printTime);
timerId = null;
function printTime() {
    let pageTime = document.getElementById("currentTime");
    let time = new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    let amPm = "AM";
    // if () {

    // }
    if (hour > 12) {
        amPm = "PM";
        hour -= 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    pageTime.innerHTML = hour + ":" + mins + ":" + sec + " " + amPm;
    timerID = setTimeout("printTime()", 1000);
}

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
let changeColor = document.getElementById("helloWorld");
changeColor.addEventListener("click", delay);

function delay() {
    setTimeout("randomColor()", 2500);
}

function randomColor() {
    let random = Math.floor(Math.random() * 16777215).toString(16);
    changeColor.style.color = "#" + random;
}
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDom(node, func) {
    func(node);
}
function diveTheDom(node) {
    if (node.tagName !== undefined) {
        if (node.text === undefined) {
            console.log("The nodes tag is: " + node.tagName + "\n\tThe nodes name is: " + node.name);
        } else {
            console.log("The nodes tag is: " + node.tagName + " \n\tThe nodes value is: " + node.text);
        }
    }
    if (node.hasChildNodes) {
        let nodeList = node.childNodes;
        for (let i = 0; i < nodeList.length; i++) {
            diveTheDom(nodeList[i]);
        }
    }
}

walkTheDom(document.body, diveTheDom)
