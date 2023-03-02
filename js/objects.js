(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// let person = new Object();
// console.log(typeof person);
//
// person["firstname"] = "Rick"
// person["lastname"] = "Sanchez"
//     console.log(person["firstname"]);
//     console.log(person["lastname"]);

    let person = {
        firstName: "Auriel",
        lastName: "Grant"
    };
// console.log(person.firstName + ' ' + person.lastName);
    console.log(person.firstName)
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    (function sayHello(){
        alert("Hello from " +[person.firstName] + ' ' +[person.lastName] + "!");
        //remember to use + without parenthesis to concatenate single characters !!!!!
    })();



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        let discount;
        let total;
        if(shopper.amount > 200){
            discount = shopper.amount * .12;
            total = shopper.amount - discount;
           console.log("Hello " + shopper.name + " your discount was " + discount + " . Your new total is " + total);
        }else{
            console.log("Hello " + shopper.name + " , your total is $ " + shopper.amount)
        }
    })
console.log("Hello " + [shoppers.name] + [shoppers.amount]);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books = [
        {
            title: "Is it a good Idea",
            author: {
                firstName: "Simon",
                lastName: "Doughty"
            }
        },
        {
            title: "Why not",
            author: {
                firstName: "Auriello ",
                lastName: "Cello"
            }
        },
        {
            title: "Sure it is",
            author: {
                firstName: "Pegasus ",
                lastName: "High"
            }},
        {
            title: "No more fear",
            author: {
                firstName: "Zeus ",
                lastName: "Power"
            }},
        {
            title: "Be a superstar",
            author: {
                firstName: "Bestie ",
                lastName: "Boo"
            }}
    ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
for(let i =0; i < books.length; i ++){
    console.log("book #" + (i + 1));
    console.log("Title: " + books[i].title);
    console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    console.log("---");
}
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
//used help during class

    function createBook(title, firstName, lastName){
        let book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName,
            }
        }
        return book;
    }

    for(let i =0; i < books.length; i++){
        let bookArr =[];
        bookArr.push(createBook(books[i]));
    }


    function showBookInfo(book, bookNum){
    for(let i =0; i < books.length; i ++){
        console.log("book #" + (bookNum));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    }
}})

