const subtract = require("./subtract")
const divide = require("./divide")
const multiply = require("./multiply")
const add = require("./add")

let a = 6;
let b=3;

console.log(`a = ${a} and b = ${b}`)
console.log("a-b =",subtract(a,b))
console.log("a+b =",add(a,b))
console.log("a/b = ",divide(a,b))
console.log("a*b = ", multiply(a,b))

