var arrayNombres = new Array(2);
var arrayNumeros = new Array(3);
function cargarNombres(arrayNombres) {
    var i;
    for (i = 0; i < arrayNombres.length; i++) {
        arrayNombres[i] = String(prompt("ingrese un nombre:"));
    }
}
function cargarNumeros(arrayNumeros) {
    var i;
    for (i = 0; i < arrayNumeros.length; i++) {
        arrayNumeros[i] = Number(prompt("ingrese un número:"));
    }
}
function imprimirNombres(arrayNombres) {
    var i;
    for (i = 0; i < arrayNombres.length; i++) {
        console.log("Nommbre de la posici\u00F3n " + i + " = " + arrayNombres[i]);
    }
}
function imprimirNumeros(arrayNumeros) {
    var i;
    for (i = 0; i < arrayNumeros.length; i++) {
        console.log("N\u00FAmero de la posici\u00F3n " + i + " = " + arrayNumeros[i]);
    }
}
cargarNombres(arrayNombres);
cargarNumeros(arrayNumeros);
imprimirNombres(arrayNombres);
imprimirNumeros(arrayNumeros);
//console.log(arrayNombres);
//console.log(arrayNumeros);
