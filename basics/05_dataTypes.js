//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100              // Number
const scoreValue = 100.3       // Number

const isLoggedIn = false       // Boolean
const outsideTemp = null       // null   -> object
let userEmail;                 // undefined

const id = Symbol('123')       // Symbol
const anotherId = Symbol('123')    // Symbol

console.log(id === anotherId);      // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];     // Array
let myObj = {
    name: "utkarsh",                                // Object
    age: 22,
}

const myFunction = function(){                      // Function
    console.log("Hello world");
}

console.log(typeof anotherId);    // symbol

