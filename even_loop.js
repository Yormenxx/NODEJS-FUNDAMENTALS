const http = require("http")


 const server = http.createServer((req, res) =>{
    
    if(req.url ==="/"){
        res.write("welcome to the server")
        return res.end()
    }

    if(req.url ==="/about"){
       
        return res.end("about page")
    }

    res.end("not found")
})

server.listen(3000)

console.log("server por on 3000")
