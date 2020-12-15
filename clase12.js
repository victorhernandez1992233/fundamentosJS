//arrow funtions
var victor = {
    nombre: 'Victor',
    apellido: 'Hernandez',
    edad: 29,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false

}
var jorge = {
    nombre: 'Jorge',
    apellido: 'Caracum',
    edad: 20,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: true,
    guitarrista: false,
    drone: false

}

var edwin = {
    nombre: 'Edwin',
    apellido: 'Caracum',
    edad: 16

}


function imprimirProfesiones(persona){
    console.log('asi como lo mira')
    console.log(`${persona.nombre} es: ` )
    //se puede utilizar esta condicion (persona.ingeniero === true) o
    // de igual manera se puede utilizar esta funcion (persona.ingeniero)
    // ya que solo se encarga de validar la condicion 

    if (persona.ingeniero === true){

    console.log('Ingeniero')
    }else {
        console.log('no es ingeniero')
    }

    if (persona.cocinero){
        console.log('Concinero')
    }else {
        console.log('no es cocinero')
    }
    if (persona.dj){
            console.log('DJ')
    }
    if (persona.cantante){
        console.log('Cantante')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }
    if (persona.drone){
        console.log('Vuela Drone')
        }

}

const MAYORIA_DE_EDAD = 18

//ambas declaraciones de funciones son validas se puede utilizar 
//var o const


//var esMayorDeEdad = function (persona){
//  return persona.edad >= MAYORIA_DE_EDAD
//}

//var esMayorDeEdad = persona => {
//  return persona.edad >= MAYORIA_DE_EDAD
//}


// y si una funcion lo unico que hace es retornar algo podemos
// eliminar el return y eliminar las llaves de igual manera 
//retornara el valor como se puede ver acontinuacion

//var esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//y si lo que queremos es desestructurar el parametro como el ejemplo 
// a continuacion

var esMayorDeEdad = ({ edad })=> edad >= MAYORIA_DE_EDAD


//en este caso se hara uso de nombre del objeto asi que se debe de pasar como parametro
// al declarar la funcion en este caso queda asi({ edad, nombre })

var imprimirSiEsMayorDeEdad = ({ edad,nombre }) => esMayorDeEdad({ edad })?
console.log( `${nombre} es mayor de edad`):console.log(`te faltan ${18-edad} Años para ser Mayor de Edad`)


var permitirAcceso = ({ edad }) =>  !esMayorDeEdad({ edad })? 
console.log('Acceso Denegado') : console.log('Acceso Autorizado')

//console.log(`${persona.nombre} tiene ${persona.edad}`)

imprimirProfesiones(victor)
imprimirSiEsMayorDeEdad(victor)
console.log('************************');
imprimirProfesiones(jorge)
imprimirSiEsMayorDeEdad(jorge) 
console.log('************************');
imprimirProfesiones(edwin)
imprimirSiEsMayorDeEdad(edwin) 
