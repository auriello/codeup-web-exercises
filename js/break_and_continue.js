let isNotValid;
let userNum;
do {
    userNum = Number(prompt("enter a number from 1 to 50"));
    if((userNum > 50 || userNum < 1) || (userNum % 2 ===0)){
        isNotValid = true;
    }else{
        break;
    }
    console.log(isNotvalid);
}while (isNotValid);


console.log("Number to skip is: " + userNum);
for(let i = 1; i < 50; i += 2){
    if(i === userNum){
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i)
}