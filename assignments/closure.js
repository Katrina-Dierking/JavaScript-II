// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function outerFunc() {
  let name = "dierking";
  
  function innerFunc() {
    console.log("Katrina " + name); 
  }
  
  return innerFunc; 
}
 let fullName = outerFunc();
fullName();

//Second closure. Different layout//

let addTo = function(outer) {
  let add = function(inner) {
  
    return outer + inner; 
     };
  return add;
};

let addSeven= new addTo(7);
let addFifteen = new addTo(15);
let addTen = new addTo(10);

console.log(addSeven(7));
console.log(addFifteen(7));
console.log(addTen(7));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function(){
    count = count + 1;
    return count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

 // Return a function that when invoked increments and returns a counter variable.
// newCounter(); //1
// newCounter(); //2
// newCounter(); //3



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {

  let counter = 0;
  console.log(counter);
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = {increment , decrement};
  
  return resObj;
  
};
  let foo = counterFactory();
  
  console.log(foo.decrement());
  console.log(foo.increment());