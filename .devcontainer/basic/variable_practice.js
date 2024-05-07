const name = "Atul Mishra";
let email  = "mishraatul930@gmail.com";
accountID = 12534;

let userName;

console.table([name, email, accountID,userName]);
/* Perfer not to use var because of block scope and functional scope issue*/
// Stack(Primitive) - The change get updated in a copy  Heap(Non-Primitive) - The change gets updated in the actual

let myData = "Atul Mishra";
let newData = myData;
console.log(newData);
newData = "Karan";
console.log(newData);


//Object

let userDetails = {
    name : "Atul",
    email : "mishraatul930@gmail.com",
}

console.table(userDetails);
