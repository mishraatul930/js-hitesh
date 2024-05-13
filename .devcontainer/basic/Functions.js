function addNumbers(number1, number2) {
    return number1+number2;
}

console.log(addNumbers(3,4));


function LoginuserMessgae(username){
    return `${username} Just Logged In`
}

console.log(LoginuserMessgae("Atul"));

//If there are multiple parameters coming in then what can be done?
// the ...num is used here as the rest operator
function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(200, 500, 400, 300));

//Scenario 2 , val1 = 200, val2 = 500 and ...num = 400, 300, 700
function calculateCartPrice1(val1, val2, ...num){
    return num;
}

console.log(calculateCartPrice1(200, 500, 400, 300, 700));

//Scenorio 3 - funtion and objects

const user = {
    username : "Atul",
    price : 123
}

function userDetails(anyObject){
console.log(`The cart price for ${anyObject.username} is ${anyObject.price}`);
}

userDetails(user);

//Scenario 4 - Array

const myNewArray = [12,23,34,56]

function getSecondData(getMyArray){
    return getMyArray[1];
}

console.log(getSecondData(myNewArray));