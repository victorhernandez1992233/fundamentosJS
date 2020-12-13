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

//function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre.toUpperCase()
    //console.log(nombre)
//}


//// otra forma mas simplificada de la misma funcion

//function imprimirNombreEnMayusculas(persona) {
  //    console.log(persona.nombre.toUpperCase())
//}


////en las ultimas versiones de js se puede solicitar de forma especifica lo que
////se requiere 
function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}


imprimirNombreEnMayusculas(victor)
imprimirNombreEnMayusculas(yoel)
imprimirNombreEnMayusculas({ nombre: 'pepito'})