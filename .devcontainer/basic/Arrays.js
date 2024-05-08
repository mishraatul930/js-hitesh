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