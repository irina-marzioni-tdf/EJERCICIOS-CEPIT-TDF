// Ejercicio entregable para el lunes 30/05 
// Nombre del Ejercicio: PERSONAS EN UNA DISCO
var listaEdades = new Array(270);
/*
function imprimirEdades(listaEdades:number[]){
    for (let i:number = 0; i < listaEdades.length; i++) {
        console.log(`Posicion ${i} = ${listaEdades[i]}`);
    }
}
*/
//-----------------------------------------------------------------------
function mostrarInformacionDeEdades(listaEdades) {
    var personasMenorA21 = 0;
    var personasMayorIgual21 = 0;
    for (var i = 0; i < listaEdades.length; i++) {
        if (listaEdades[i] < 21) {
            personasMenorA21++;
        }
        else {
            personasMayorIgual21++;
        }
    }
    console.log("Cantidad de personas menores a 21 a\u00F1os: " + personasMenorA21);
    console.log("Cantidad de personas mayores o iguales a 21 a\u00F1os: " + personasMayorIgual21);
    console.log("Total de personas dentro del local: " + listaEdades.length);
}
//------------------------------------------------------------------------
function aleatorio(menorValor, mayorValor) {
    var edad = 0;
    while ((edad < menorValor) || (edad > mayorValor)) {
        edad = Math.floor(Math.random() * 100); // obtendrá edades hasta que edad sea un valor que esté entre 18 y 40
    }
    return edad; // 18 <= edad <= 40
}
function cargarEdades(listaEdades) {
    for (var i = 0; i < listaEdades.length; i++) {
        listaEdades[i] = aleatorio(18, 40);
    }
}
//-------------------------------------------------------------------------
cargarEdades(listaEdades);
mostrarInformacionDeEdades(listaEdades);
//imprimirEdades(listaEdades);
