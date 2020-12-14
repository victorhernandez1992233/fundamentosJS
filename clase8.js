var victor = {
    nombre: 'victor',
    apellido: 'hernandez',
    edad: 28
}

var yoel = {
    nombre: 'yoel',
    apellido: 'estrada',
    edad: 24
}

function imprimirNombreEnMayusculas(persona) {
    var {nombre} = persona
    var {edad} = persona
    console.log('hola mi nombre es ' + nombre.toUpperCase()+' y tengo '+ edad + ' anos' )
}


imprimirNombreEnMayusculas(victor)
imprimirNombreEnMayusculas(yoel)


function cumpleanos (persona) {
    return {
        ...persona,
        edad: persona.edad+1
    }

}
