//ES UN MODULO QUE SE USA MUCHO PARA USAR SERVIDORES WEB 

const { write } = require("fs")
const http = require("http")

// PRIMERO NOS TRAEMOS EL MODULO

//PARA ENTENDERLO HAY QUE SABE REL MODELO CLIENTE SERVIDOR
// UN CLIENTE SE CONECTA A UN SERVIDOR QUE ATIENDE Y RECIBE PETICIONES REQUEST Y RESPONSE

//PARA CREAR NUESTRO SERVIDOR USAMOS

//http.createServer

//COMO EL SERVIDOR RECIBE Y CONTESTA PETICIONES, NECESITAMOS UNA FUNCION QUE ESTE AL TANTO DE ESO 


http.createServer(function (request, response){

    console.log(request.url)

    if(request.url === "/"){

        response.write("bienvenido al servidor")
        return response.end()
    }

    if(request.url === "/about"){

        response.write("acerca de")
        return response.end()
    }
    

    response.write(" not found")
    response.end()

}).listen(3000)

console.log("servidor escuchando en el puerto 3 mil")














