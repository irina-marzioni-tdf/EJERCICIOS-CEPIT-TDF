var dimension = Number(prompt("Ingrese la dimensión del arreglo:"));
var arregloNumeros = new Array(dimension);
var sumatoriaDelArreglo = 0;
function cargarNumeros(arregloNumeros) {
    var i;
    for (i = 0; i < arregloNumeros.length; i++) {
        arregloNumeros[i] = Number(prompt("Ingrese un n\u00FAmero para la posici\u00F3n " + i + " :"));
    }
}
function imprimirArray(arregloNumeros) {
    var i;
    for (i = 0; i < arregloNumeros.length; i++) {
        console.log("N\u00FAmero de la posici\u00F3n " + i + ":  " + arregloNumeros[i]);
    }
}
function sumarElementosDelArray(arregloNumeros) {
    var i;
    var sumatoria = 0;
    for (i = 0; i < arregloNumeros.length; i++) {
        sumatoria += arregloNumeros[i];
    }
    return sumatoria;
}
cargarNumeros(arregloNumeros);
imprimirArray(arregloNumeros);
sumatoriaDelArreglo = sumarElementosDelArray(arregloNumeros);
console.log("La sumatoria de todos los n\u00FAmeros del array es: " + sumatoriaDelArreglo);
