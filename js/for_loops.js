console.log("it works bc im a genius");

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//  1. create function named showMultiplicationTable
//  2. have function accept(take in) a number as an argument
//  3. console.log multiplication table from 1-10(for loop)


function showMultiplicationTable(num){

    for (let i = 1; i <=10 ; i++){
        let sum = num * i;
        console.log(num + " * " + i + " = " + sum);
    }
}
showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
//  1. create a for loop that will generate 10 random numbers
//  2. make sure random numbers are between 20-200 (math.random function)
//  3. check for random number being even or odd (if statement/conditional)

// var randomColor = colors[Math.floor(Math.random() * colors.length)];

for(let i =1; i <= 10; i++){
    let randomNum = Math.floor(Math.random() * 180) + 20;
    if(randomNum % 2 === 0){
        console.log(randomNum + " : Even")
    }else{
        console.log(randomNum + ": Odd")
    }
}

// 4.
for(let i = 1; i <=9; i++){
    console.log(i.toString().repeat(i))
}

//  5
// for (let i = 100; i => 5; i -= 5) {
//     console.log(i)

}