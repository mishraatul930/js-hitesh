// falsy values

// false,0 -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
//true, "0", "false", " ", [], {}, empty function - function(){}

const emptyobject = {};

if(Object.keys(emptyobject).length === 0){
    console.log("This is an empty Object");
}

//Nullish Collacing Operator (??): values used -> null, undefined
//To prevent null assignment to a variable eg - calling values from DB, we use '??'
let val1;
val1 = null ?? 10;
console.log(val1);
