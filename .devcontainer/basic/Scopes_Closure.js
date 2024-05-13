//Nested Scope and Closure - Function inside function
One();
function One(){
    const username = "Atul";
    function Two(){
        const website = "Youtube";
        console.log(username);
    }
    //console.log(website);  //Cannot be accessed
    Two();
}



//console.log(addtwo(2)); Cannot access this before fucntion definition, this is called hoisting.
const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(2));
