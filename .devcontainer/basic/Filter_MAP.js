const nums = [1,2,3,4,5,6,7,8,9,10]
const filteredNums = nums.filter((num)=>num>4)
console.log(filteredNums);

//ForEach does not return anything

//MAP

const myNums = [1,2,3,4,5,6,7,8,9,10];
const filteredmyNums = myNums.map((num)=>{
    return num + 10;
})

console.log(filteredmyNums);


//Chaining
const newNums = [1,2,3,4,5,6,7,8,9,10];
const newFilteredNums = newNums.map((num)=>{return num * 10})
    .map((num)=>{return num+1})
    .filter((num)=>{return num >= 40});
console.log(newFilteredNums);

//reduce function

const reduceNums = [1,2,3,4,5]
const newReduceNums = reduceNums.reduce((acc,currvalue)=>{
    console.log(`Accumulator Value : ${acc} and Current Value : ${currvalue}`);
    return acc + currvalue;
},0);

console.log(newReduceNums);