//invetir arrray comletamente
let arreglo: number[];

function imprimirArray(array: number[]) {
    for (let i:number= 0; i < array.length; i++){
        console.log (`Posición [${i}] = ${array[i]}`);
    }
}

function intercambiarValores(array:number[], x:number, y:number) {
      array[x] += array[y];
      array[y] = array[x] - array[y];
      array[x] = array[x] - array[y];
}

function invertirArray(array:number[]){
    let i:number = 0;
    let j:number = array.length-1;
    let aux:number=0;
    for (let cantIteracion:number = Math.floor(array.length/2);  cantIteracion > 0;  cantIteracion--) {
      intercambiarValores(array,i,j)
      i++;
      j--;
    }
}

function elegirLongitudArray(): number[] {
    let longitud: number = Number(prompt("Ingrese la longitud del array:"));
    let array: number[] = new Array(longitud);
    return array;
}

function cargarArray(): number[] {
    let array: number[] = elegirLongitudArray();
    for(let i: number = 0; i < array.length; i++) {
        array[i] = Number(prompt(`Elemento Nro ${i+1}\nIngrese un número: `));
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