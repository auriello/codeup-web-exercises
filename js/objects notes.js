//I want to create an object
let dog = new Object();
console.log(typeof dog);
//this will define a new dog object by using a new keyword to make a new object prototype


//Making an object using object literal notation: curly braces will define the new object
let dog = {};

------------------------------------------------------ARRAY NOTATION----------------------------------------------------
    //the value inside of square bracket will be my properyt name
// i must have poroperty name in double/single quotes in order to define the property
// declaring/initializing color property for dog object using array notation
dog["color"] = "black;";
//reinitialzing my property value
dog["color"] = "gold";
// we are displaying dog color by referencing property
console.log(dog["color"])


let cat = {
    color: "black",
    gender:"female"
}
console.log(cat.color)
console.log(cat["gender"])


cat.meow = function meow(){
    alert(this.name + " goes MEOW")
}