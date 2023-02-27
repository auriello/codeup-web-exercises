let i = 1;

while(i < 65536){
    i *= 2
    console.log(i)
}




// Do While Loop question
//  1.generate random number between 50 & 100
//  2.create do while loop that generates a number between 1 & 5 (cones bought)
//  3. log out how many cones are sold by each person
// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
let allCones = Math.floor(Math.random() * 50) + 50;
let soldCones;
do{

    soldCones = Math.floor(Math.random() * 5) + 1;
    if(allCones < soldCones){
        console.log("Cannot sell you " + soldCones + " cones I only have " + allCones);
        continue;
    }
    allCones -= soldCones;
    console.log(soldCones + " cones sold...")
}while(allCones > 0)
console.log("Yay! I sold them all");

