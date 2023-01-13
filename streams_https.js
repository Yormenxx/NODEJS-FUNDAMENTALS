const http = require("http")

const {createReadStream} = require("fs")



 const server = http.createServer((response, request)=>{

    
    const streamFile =createReadStream("./data/bigfile",{
        encoding:"utf-8"
    });

    streamFile.on("data",(chunk)=>{
        streamFile.pipe(response)
    });

    streamFile.on("error",(error)=>{
        console.log(error)
    })

})


server.listen(3000)

console.log(`server in the port ${3000}` )

