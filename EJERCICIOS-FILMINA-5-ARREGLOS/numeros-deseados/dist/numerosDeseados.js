var arrayNros = new Array(5);
function rellenoArray(arrayNros) {
    for (var i = 0; i < arrayNros.length; i++) {
        arrayNros[i] = Number(prompt("Ingrese un número:"));
    }
}
function impresionArray(arrayNros) {
    for (var i = 0; i < arrayNros.length; i++) {
        console.log("la posición ", i + 1, " contiene el número ", arrayNros[i]);
    }
}
rellenoArray(arrayNros);
impresionArray(arrayNros);
