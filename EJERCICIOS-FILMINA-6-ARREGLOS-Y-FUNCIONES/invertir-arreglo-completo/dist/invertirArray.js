//invetir arrray comletamente
var arreglo;
function imprimirArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log("Posici\u00F3n [" + i + "] = " + array[i]);
    }
}
function intercambiarValores(array, x, y) {
    array[x] += array[y];
    array[y] = array[x] - array[y];
    array[x] = array[x] - array[y];
}
function invertirArray(array) {
    var i = 0;
    var j = array.length - 1;
    var aux = 0;
    for (var cantIteracion = Math.floor(array.length / 2); cantIteracion > 0; cantIteracion--) {
        intercambiarValores(array, i, j);
        i++;
        j--;
    }
}
function elegirLongitudArray() {
    var longitud = Number(prompt("Ingrese la longitud del array:"));
    var array = new Array(longitud);
    return array;
}
function cargarArray() {
    var array = elegirLongitudArray();
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(prompt("Elemento Nro " + (i + 1) + "\nIngrese un n\u00FAmero: "));
    }
    return array;
}
arreglo = cargarArray();
console.log("Arreglocargado:");
imprimirArray(arreglo);
invertirArray(arreglo);
console.log("Array cargado Invertido:");
imprimirArray(arreglo);
/*
function invertirArray(v:number[]){
    let i:number = 0;
    let inv:number = v.length-1;
    let aux:number=0;
    for (let cant:number = Math.floor(v.length/2);  cant > 0;  cant--) {
      aux = v[i];
      v[i] = v[inv];
      v[inv] = aux;
      i++;
      inv--;
    }
}
*/
//  OTRA FORMA CLONANDO EL ARRAY ORIGINAL  (mi primer solucion)
/* function invertirArray(vector:number[]){
    let vectorClon:number[] = new Array(vector.length);

    for (let i:number= 0; i < vector.length; i++){
        vectorClon[i] = vector[i];
    }

    let indice:number = 0;
    let indiceInvertido:number;
    for (indiceInvertido = vectorClon.length-1;  indiceInvertido >= 0;  indiceInvertido--) {
        vector[indice] = vectorClon[indiceInvertido]
        indice++;
    }
}*/
// OTRA FORMA UTILIZANDO WHILE (solucion propuesta en la filmina)
/*
function invertirVector(v : number[]) {
    let indiceIzq : number = 0;
    let indiceDer : number = v.length-1;
    let aux : number;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
*/ 
