//Demonstrate the ‘for of’ loop.
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

//Demonstrate the Array and Object Destructuring.
const person = { name: "Alice", age: 30, spi: 9 };
const { name, age } = person;
console.log(person)

///Demonstrate the Arrow functions.
let a = 10
let b = 20
let myfunction = (a, b) => (a * b)
console.log(myfunction)

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
