const fs = require("fs")

//Con esto podemos leer el archivo pero nos los va a mostrar de una forma bruta
// const first = fs.readFileSync("./data/first.txt")

//Nos muestra el contenido en el verdadero formato
//tambien se puede hacer con el metodo toString()
// const first = fs.readFileSync("./data/first.txt","utf-8")

// const second = fs.readFileSync("./data/second.txt")

// console.log(first)

// console.log(second.toString())

//PARA CREAR ARCHIVOS ES SIMILAR Y SE HACE CON WRITE
//La ruta que se especifica es para donde deseamos guardar el archivo , y despues especificamos el contenido 
// fs.writeFileSync("./data/third.txt"," este es el tercer archivo ")

// const third = fs.readFileSync("./data/third.txt")
// console.log(third.toString())

//Cada vez que ejecutamos el codigo se va a crear el mismo archivo y se sobreescribe, para añadir contanido usamos "a"
// const title = "Este es el cuarto archivo y es un titulo "
// fs.writeFileSync("./data/fourth.txt", title)

// const parrafo= "parrafo para añadir cotenido "

// fs.writeFileSync("./data/quinto.txt", parrafo,{
//     flag: "a"
// })





//---------------USANDO CODIGO ASINCRONICO -----------------------


//vamos usar una funcion para nuestro asincronismo para ller archivos 
//Se usa siempre una condcion con una funcion para saber como ocurre  el archivo en asinronismo
fs.readFile("./data/first.txt", (err, data) =>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

























