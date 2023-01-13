const {readFile} = require('fs')



const getText = (pathFile)=>{

    return new Promise(function(resolve, reject){

        readFile(pathFile,"utf-8", function(err,data){

            if(err){

                reject(err)

            }

            resolve(data)

        })

        
    })
}


async function  read(){
    const result1 = await getText("./data/fourth.txt")
    try{
        console.log(result1)

    }catch (error){
        console.log(error)
    }

}
read();

// getText("./data/fourth.txt").then((result)=>console.log(result)).catch((error) =>console.log(error))

// new Promise(function(resolve, reject) {

//     readFile("./data/first.txt", "utf-8", (err,data) =>{

//         if(err){
            
//             reject(err)
            
//         }
//         resolve(data)
//     })
    

// })


