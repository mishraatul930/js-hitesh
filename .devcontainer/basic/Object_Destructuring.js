//Destructuring Objects

const course = {
    coursename : "JS",
    courseprice: "1000",
    courseteacher : "Atul",
}

//Object Destructuring - Type 1
const {coursename} = course;
console.log(coursename);

//Object Destructuring - Type 2
const {courseprice:price} = course;
console.log(price);