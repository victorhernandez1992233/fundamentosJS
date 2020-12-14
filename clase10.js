var victor = {
    nombre: 'victor',
    apellido: 'hernandez',
    edad: 29,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false

}
var jorge = {
    nombre: 'jorge',
    apellido: 'Caracum',
    edad: 20,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    gay: true,
    guitarrista: false,
    drone: false

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

    if (persona.gay){
        console.log('Es Gay')
        }
}

function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad},`)
    if (persona.edad >= 18){
        console.log('es mayor de edad')
    }else{
        console.log('es Menor de Edad')
    }
    
}
imprimirProfesiones(victor)
imprimirSiEsMayorDeEdad(victor)
console.log('************************');
imprimirProfesiones(jorge)
imprimirSiEsMayorDeEdad(jorge) 
console.log('A jorge ya se le va');