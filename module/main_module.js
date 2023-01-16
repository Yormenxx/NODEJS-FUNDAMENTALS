//Asi es como exportamos archivos o modularizamos los archivos en node---module.exports

const myWebAdress = [1,2,3,4,5]

const webLink = "Pwel.com"

const MyNumber = 302551562

const user = {
    nameUser: "Juan",
    lastName: "Ortiz"
}

//Esta es un sintaxis valida si queremos exportar un modulo
// module.exports = myWebAdress

//Cuando nosotros queremos agrupar varios elementos para exportar un modulo, lo mejor es 
//agruparlos en un objeto

// const group = {

//     myWebAdress,
//     webLink,
//     MyNumber,
//     user
// }

//TAMBIEN NOS PODEMOS EVITAR CREAR UNA CONSTANTE , SIMPLEMENTE AGRUPAMOS TODOS LOS ELEMENTOS A EXPORTAR EN EL MODULE

//const group = {

//     myWebAdress,
//     webLink,
//     MyNumber,
//     user
// }

module.exports = {
    myWebAdress,
    webLink,
    MyNumber,
    user
}








