
let age = 8;

if (age >= 16) {
    console.log("Old enough to drive")
}

if (age < 16) {
    console.log("not old enough")
}

if (age >= 16){
    console.log("Old enough to drive")
} else if (age > 0 && age <16)
{
    console.log("not a valid age")
}


//if/else if/else example
let daysOfTheWeek = prompt("enter a day of the week")

// if (daysOfTheWeek === "Monday"){
//     console.log("I hate " + daysOfTheWeek)
// } else if (daysOfTheWeek === "Tuesday"){
//     console.log("Tuesdays are better")
// }else if (daysOfTheWeek === "Wednesday"){
//     console.log("I have " + daysOfTheWeek)
// } else if (daysOfTheWeek === "Thursday"){
//     console.log("Tuesdays are better")
// } else {
//     console.log("Not a valid day of the week")
// }

if (daysOfTheWeek === "Monday" || daysOfTheWeek === "Tuesday" || daysOfTheWeek === "Wednesday" || daysOfTheWeek === "Thursday"){
    console.log(daysOfTheWeek + " is my favorite day!")
} else {
    console.log("Not a valid day")
}


let num = 42;
if (typeof num === "string") {
    console.log("type of num is a number")
} else {
    console.log("typeof is not a number")
}

// another example of if/else if/else

// let username = "user";
// let password = "password";

// let userUsername = prompt("Enter your username");
// let userPassword = prompt("Enter your password");

// if(username === userUsername && password === userPassword){
//     console.log("Successfully logged in")}
// else if(username !== userUsername && password !== userPassword)
//     {
//         console.log("Invalid username and password")
// } else if (username !== userUsername) {
//     console.log("Invalid username")
// } else if (password !== userPassword){
//     console.log("Invalid password")
// }

//example for password
//password >= 6 character
//password must not include a space
// let password = prompt("Please enter a password");
//
// if(password.length >= 6){
//     console.log("Valid password")
// } else {
//     console.log("Password hasn't met the requirements")
// }

///Ternary Operators
// condition ? value1 : else statement run
let name = "Bob"
// let greeting = name === "Bob" ? "Hello " + name : "Hello stranger";
// console.log(greeting)

if(name === "Bob"){
    console.log("hello " + name)
} else {
    console.log("Hello Stranger !")
}

//SWITCH STATEMENTS
let grade = "B";

switch(grade) {
    case "A":
        console.log("Way to Go!");
        break;
    case "B":
        console.log("Good Work!");
        break;
    case "C":
        console.log("Not Bad!");
        break;
    case "D":
        console.log("Keep Trying!");
        break;
    case "F":
        console.log("oh-oh! Not good");
        break;
    default:
        console.log(grade + "is not a valid letter grade!");
}