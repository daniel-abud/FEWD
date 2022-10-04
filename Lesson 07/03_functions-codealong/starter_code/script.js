// Let's create 4 functions!


// 0. Add 4 to a number

function addFour(inputNumber) {
    let outputNumber = inputNumber + 4;
    return outputNumber;
}

console.log(addFour(4));
console.log(addFour(-1));
console.log(addFour(37));


// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(apples){
    return apples * apples
}

console.log(squared(2)); /* apples == 2 */
console.log(squared(5)); /* apples == 5 */
console.log(squared(-3)); /* apples == -3 */

// console.log(typeof squared)

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(orange){
    // let newLength = orange.length;
    // return newLength
    return orange.length    
}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))



// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

// console.log(addNumbers(4, 2));
// console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

// console.log(sayHello("Paul"));