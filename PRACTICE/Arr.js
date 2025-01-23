
//Demonstrate the use of array to find maximum number.
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


//WAP to read an array from the user and sort them in ascending 
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

//WAP to read an array from the user and sort them using bubble sort. 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

///WAP to read an array form the user and sort them using quick sort.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

/// Write a JavaScript that uses a loop that searches a word in sentence held in an array, returning the index of the word.
function findWordIndex(sentenceArray, word) {
    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i] === word) {
            return i;
        }
    }
    return -1; // Word not found
}

///WAP to display Faculties stored in array.
// Example: Displaying faculties
const faculties = ["Math", "Science", "English"];
faculties.forEach(faculty => console.log(faculty));

// Demonstrate different array functions like push, pop, shift, unshift, splice, sort etc...
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add to the end
numbers.pop(); // Remove from the end
numbers.shift(); // Remove from the beginning
numbers.unshift(0); // Add to the beginning
numbers.splice(2, 2); // Remove 2 elements from index 2
numbers.sort((a, b) => a - b); // Sort in ascending order

//WAP to display students stored in array.
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}


function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

//WAP to display products stored in array.


//WAP to demonstrate callbacks in JavaScript.
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


// Demonstrate the difference between let and var.
// `let` is block-scoped, `var` is function-scoped
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // ReferenceError: i is not defined

//Demonstrate the default parameter while using a function.
function greet(name = "World") {
    console.log("Hello, " + name);
}

greet(); // Output: Hello, World
greet("Alice"); // Output: Hello, Alice

// Demonstrate the spread operator.
const numbers1 = [1, 2, 3];
const newNumbers = [...numbers1, 4, 5];

//Demonstrate the ‘for of’ loop.
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

//Demonstrate the Array and Object Destructuring.
const person = { name: "Alice", age: 30 };
const { name, age } = person;

///Demonstrate the Arrow functions.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

///Demonstrate how to create a class in Java Script.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//Write JavaScript that handles following mouse event. o If mouse left button pressed on browser, it displayed message 
//“Left Clicked”. If mouse right button pressed on browser, it displayed message “Right Clicked”.
document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        console.log("Left Clicked");
    } else if (event.button === 2) {
        console.log("Right Clicked");
    }
});