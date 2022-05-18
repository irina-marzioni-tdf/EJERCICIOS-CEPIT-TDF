var nroDimension = Number(prompt("Ingrese la cantidad de nombres a ingresar:"));
var arrayNombres = new Array(nroDimension);
function impresionArrayNombres(arrayNombres) {
    for (var i = 0; i < arrayNombres.length; i++) {
        console.log("La posición ", i + 1, " contiene el nombre ", arrayNombres[i]);
    }
}
function rellenoArrayNombres(arrayNombres) {
    for (var i = 0; i < arrayNombres.length; i++) {
        arrayNombres[i] = prompt("Ingrese un nombre:");
    }
}
rellenoArrayNombres(arrayNombres);
impresionArrayNombres(arrayNombres);
