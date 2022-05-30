var dimension = Number(prompt("Ingrese la dimensión del array: "));
var array = new Array(dimension);
function imprimirArrayAlReves(array) {
    var i = array.length - 1;
    for (i; i >= 0; i--) {
        console.log("Posici\u00F3n " + i + " = " + array[i]);
    }
}
function completarArray(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(prompt("Ingrese un n\u00FAmero para la posici\u00F3n " + i));
    }
}
completarArray(array);
imprimirArrayAlReves(array);
