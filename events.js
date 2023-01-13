//funcionan como los eventos en js pero su sintaxis es distinta

const eventMitter  = require("events");

const event = new eventMitter();


event.on("res", (data)=>{

    console.log(data)

})

event.emit("res","hola mundo")

