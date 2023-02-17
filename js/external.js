"use strict";

console.log("Hello  from external JavaScript");

alert('Welcome to my website');

let favColor = prompt("What is your favorite color?");
alert('Great '+ favColor + ' is my favorite color too!');

let cost = 3;
let littleMermaid = Number(prompt("How many days do you want to rent the Little Mermaid for?"));
let BB = Number(prompt("How many days do you want to rent BB for?"));
let H = Number(prompt("How many days do you want to rent Hercules for?"));
let total =3 * (littleMermaid + BB + H);
alert('Your final price for movies is '+ total );


let google = Number( prompt("how man hours did you work at google this week"));
let amazon = Number( prompt("how man hours did you work at amazon this week"));
let facebook = Number( prompt("how man hours did you work at facebook this week"));

let total2 = (google * 400) + (amazon * 380) + (facebook * 350);
alert('Your paycheck will be '+ total2 );

let notFull = confirm("is the class not full?");
let notConflict = confirm("Do you have a working schedule for this class?");
let canEnter = notFull && notConflict;
alert("Ability to enter the class: " + canEnter);

let quanity = Number(prompt("How many items do you have?"));
let enoughItems = quanity >=2;
let isNotExpired = confirm("click ok if your offer is not expired");
let premiumMember = confirm("click of if youre a premium member");

let offerValid = (enoughItems && isNotExpired) || premiumMember;
alert("Valid discount: " + offerValid);





