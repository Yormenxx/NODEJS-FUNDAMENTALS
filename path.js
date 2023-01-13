//CON EL MODULO PATH NO TENEMOS QUE PREOCUPARNOS SI ESTAMOS EN LINUX MAC O WIN
const { Console } = require("console")
const path = require("path")

//Nos muestra el separador del SO
console.log(path.sep)

//Nos ayuda a crear paths
const filePath = path.join("Public","Javascript","index.js")
console.log(filePath)

//Nos extrae una url pero solo el archivo base
console.log(path.basename(filePath))

//Nos muetsra los directorios
console.log(path.dirname(filePath))

//Nos muestra todo como un objeto
console.log(path.parse(filePath))

//RESOLVE  NOS AYUDA A COMPLETAR LA RUTA CON LA DEL SISTEMA OPERATIVO

console.log(path.resolve("dist"))


