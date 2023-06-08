// Arrow Functions: also called f;lat arrow functions,popular feature of es6.it is new way of writing concise functions.

//Before es6:
var sum = function () {
  var a = 10;
  var b = 9;
  return a + b;
};
console.log(sum());
//es6

let c = 10;
let d = 9;
// const total =() => {return c+d}
//if single statement thw no need to write return stmt
const total = () => c + d;
console.log(total());

//another method
const summ = (m, n) => m + n;
console.log(summ(10,9));
