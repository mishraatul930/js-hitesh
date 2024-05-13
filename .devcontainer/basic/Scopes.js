//Global Scope
// let a = 10;
// const b = 20;
var c = 30;

//Block Scope
if(true){
    let a = 40;
    const b = 50;
    var c = 60;
}

console.log(a);
console.log(b);
console.log(c);

//Since the value of c changes even if it is out of the if scope hence using var is not recommended.