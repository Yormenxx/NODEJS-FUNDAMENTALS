//con require podemos traer ese parte del modulo
//Esta parte del codigo nos extrae todo lo que exportamos del otro archivo

// const web =require("./module/main_module")
//console.log(web)

//También podemos extraer  de todo el objeto , un solo elementos
// const {myWebAdress} = require("./module/main_module")


// console.log(myWebAdress)


const math= require("./math/index")


// console.log(math)

console.log(math.add(10,20))
console.log(math.substract(10,20))
console.log(math.multiply(10,20))
console.log(math.divide(10,20))











