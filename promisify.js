const {readFile, read} = require("fs")

const {promisify} = require("util")

const promiRead = promisify(readFile)


async function readp(){

    const result1 = await promiRead("./data/first.txt",'utf-8') 

    console.log(result1)
}



readp();






