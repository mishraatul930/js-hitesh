const user = {
    username : "Atul",
    Price : 256,
    welcomeMessage : function (){
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage();
user.username = "Karan"

user.welcomeMessage();

console.log(this); //Here the output will be empty object because the current context is empty 
//as we are in node environment, it will change when we are doing the same thing in Browser, 
//it will then show Window Object.

function One (){
    const username1 = "Aman";
    console.log(this.username1); //this will give undefined as the "this" keyword works inside objects only
}

One();

const Two = () => {
    const username2 = "Amit"
    console.log(this.username2);
}

Two(); //undefined

//Implicit Return paranthesis in num1+num2 is optional
const addNumber = (num1, num2) => (num1 + num2);
console.log(addNumber(3,4));


//Immediately Invoked Function Expression Eg - DB Connection,To stop global variables pollution we use

(function chai (){
    console.log("this is my IIFE");
})();

( () => {
    console.log("DB CONNECTED");
})();


( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('Atul');

//We need to end the IIFE functions with the semicolon
