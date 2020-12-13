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

//salida --> hola mi nombre es VICTOR y tengo 28 anos
//salida --> hola mi nombre es YOEL y tengo 24 anos
