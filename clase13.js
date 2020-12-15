
//LOOP FOR

var victor = {
    nombre: 'victor',
    apellido: 'Hernandez',
    edad: 28,
    peso: 210
}

console.log(`al inicio del año ${victor.nombre} pesaba ${victor.peso} lb`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

// ambas funciones que acontinuacion se presentan son exactamente las mismas
//solo que una esta realizada con arrow function

/* function aumentarDepeso (persona) {
    return persona.peso += 200
} */

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO


const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_AÑO; i++ ) {

    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(victor)
    } else if (random < 0.5 ){
        bajarDePeso(victor)
    }

}

console.log(`al final del ano ${victor.nombre} pesa ${victor.peso.toFixed(2)} lb`)
//toFixed(2) es para que la funcion tome solo dos lugares despues de la coma