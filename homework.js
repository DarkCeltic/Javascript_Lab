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
