// singleton - Object.create

//object Literals
const mySym = Symbol("myKey1");
const JsUser = {
    "name":"Atul",
    age :27,
    city:"Pune",
    [mySym]:"myKey1",   //To access Symbol inside object
    email:"mishraatul930@gmail.com"
}

console.log(JsUser[mySym]);
JsUser.email = "mishraatul2796@gmail.com";
//To Prevent objects from changing we use
// Object.freeze(JsUser);
JsUser.age = 37;
console.log(JsUser);

//To add data into an object
JsUser.greeting = function(){
    console.log("Hi! How are you!");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hi! ${this.name} are you!`);
}

console.log(JsUser.greetingTwo());


const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e", 6:"f"};

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

//We can use spread operator also in Project
const obj4 = {...obj1, ...obj2}
console.log(obj4);

//To check for Keys and Values
console.log(Object.keys(obj1));
console.log(Object.values(obj2));
console.log(Object.entries(obj1)); //returns an array containing all the keys and values
console.log(obj1.hasOwnProperty('isLogged')); //returns false as the object does not contain the keys
