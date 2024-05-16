//for of loop
const arr = [1,2,3,4,5];

for (const val of arr) {
    console.log(val);
}

const greeting = "Hello Atul";

for (const words of greeting) {
    console.log(words);
}

//MAP

const map = new Map();
map.set('1','Atul');
map.set('2','Aman');
map.set('3','Karan');

for (const [key, value] of map) {
    console.log(key, ":-" , value );
}

//"MAPS ARE Iteratable" using for of but "OBJECTS are NOT Iteratable", MAPS cannot be iterated using
// FOR IN as well
//Array - FOR OF , Objects - FOR IN

//For IN Loop
const myObject = {
    js:"Javascript",
    cpp : "C++",
    html:"Hyper Text Markup Language"
}

for (const key in myObject) {
    console.log(`The value on key "${key}" : ${myObject[key]}`);
}

//FOR EACH

const myArr = [1,2,3,4,5]

myArr.forEach((item)=>{
    console.log(item);
})

myArr.forEach((item, index,arr)=>{
    console.log(`The item is ${item}, the index is ${index} and the array is ${arr}`);
})