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
