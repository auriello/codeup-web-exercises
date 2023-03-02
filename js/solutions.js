console.log("it works")

// 1.
function animal(chickenNum, cowNum, pigNum){
    return (chickenNum * 2) + (cowNum * 4) + (pigNum * 4);
}

console.log(animal(3, 4, 4));

// 2.
function findPerimeter(length, width){
    return (length * 2) + (width * 2);
}

console.log(findPerimeter(5, 3))

// 3.
function concatName(firstName, lastName){
    return lastName + ", " + firstName
}

console.log(concatName("Jordy", "Muniz"));

// 4.
function triArea(base, height){
    return (base * height) / 2;
}

console.log(triArea(10, 10));

// 5.
function lessThan100(num1, num2){
    if((num1 + num2) < 100){
        return true;
    }else {
        return false;
    }

}

// 6.
console.log(lessThan100(50, 25))

function makesTen(a, b){
    if(a === 10 || b === 10){
        return true;
    }else if((a + b) === 10){
        return true;
    }else {
        return false;
    }
}

console.log(makesTen(5, 5));

// 7.
function points(twoPointers, threePointer){
    return (twoPointers * 2) + (threePointer * 3);
}

console.log(points(2, 3));

// 8.
function Convert(minutes){
    return minutes * 60;
}

console.log(Convert(6))

// 9.

function remained(num1, num2){
    return num1 % num2;
}

console.log(remained(4, 2));

// 10.
function getFisrtValue(arr){
    let invalid = false;
    arr.forEach(function (item){
        if(isNaN(item)){
            console.log("invalid");
            invalid = true;
        }
    })

    if(invalid){
        return "value is not a number, invalid array"
    }else {
        return arr[0];
    }
}

console.log(getFisrtValue(["joe", 2, 3]))
console.log(getFisrtValue([1, 2, 3]))