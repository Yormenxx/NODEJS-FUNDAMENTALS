// //LOS STREAMS NOS AYUDAN A DIVIDIR LO ARCHIVOS EN MAS PEQUEÑOS

// const { writeFile} = require("fs/promises")


// // const bigfile = async()=>{
// //     await writeFile("./data/big.txt","hello world".repeat(1000000))
// // }


// bigfile();

const { create } = require("domain")
const {createReadStream} = require("fs") 

const stream = createReadStream("./data/big.txt","utf-8")

stream.on("data", (chunk)=>{
    console.log(chunk)
})