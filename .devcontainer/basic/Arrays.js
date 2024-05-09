//Array Concepts

//Array is an object
//Collection of multiple items
//It can be resized
//Index start with 0
//Arrays make shallow copy

const arr1 = [1,2,true, "Atul"];
const arr2 = new Array(1,2,true,"Aman");
const arr3 = [1,2,3,4,5]
const newArray = arr3.join();
console.log(arr1);
console.log(typeof newArray);

//Slice does not manipulate the array
//Splice does manipulate the original array


//Spread Operator is used to combine two arrays.
const array = ["Atul","Ranjit","Kunal"];
const new_array = ["Pratiksha","Mayuri"];
const a_new_array = [...array,...new_array];
console.log(a_new_array); //O/p - ["Atul","Ranjit","Kunal","Pratiksha","Mayuri"]

//flat Operator - Used to dig deeper into nested array

const another_array = [1,2,3,4,[5,6],7,[8,9,0],10,[11,12]];
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);

