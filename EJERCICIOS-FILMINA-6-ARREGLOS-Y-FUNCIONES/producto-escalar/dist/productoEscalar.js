//Producto Escalar
var vector1;
var vector2;
var productoEscalar = 0;
function pedirDimensionArray() {
    var dimension = Number(prompt("Ingrese la dimensión de los array:"));
    var array = new Array(dimension);
    return array;
}
function cargarArrayManualmente() {
    var vector = pedirDimensionArray();
    for (var i = 0; i < vector.length; i++) {
        vector[i] = Number(prompt("Ingrese un numero para la posicion " + i + ": "));
    }
    return vector;
}
function calcularProductoEscalar(v1, v2) {
    var pEscalar = 0;
    for (var i = 0; i < v1.length; i++) {
        pEscalar += v1[i] * v2[i];
    }
    return pEscalar;
}
alert("Cargar Vector 1");
vector1 = cargarArrayManualmente();
alert("Cargar Vector 2");
vector2 = cargarArrayManualmente();
productoEscalar = calcularProductoEscalar(vector1, vector2);
console.log("Producto Escalar = " + productoEscalar);
