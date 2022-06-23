let dimension: number = 3;
/*
let arreglo1:number[];
let arreglo2:number[];
let arreglo3:number[];
let arreglo4:number[];
*/
let arregloResultante: number[];


/*
function cargarArreglo(): number[] {
    let array: number[] = new Array(3);
    for(let i: number = 0; i < array.length; i++) {
        array[i] = Number(prompt(`Ingrese un número para la posición [${i}]: `));
    }
    return array;
}
*/

function multiplicarArreglo(array1: number[], array2: number[],): number[] {
    let dimension: number = array1.length;
    let arregloResultante: number[] = new Array(dimension);
    for (let i: number = 0; i < dimension; i++) {
        arregloResultante[i] = array1[i] * array2[i];
    }
    return arregloResultante;
}
/*
arreglo1 = cargarArreglo();
arreglo2 = cargarArreglo();
arreglo3 = cargarArreglo();
*/
arregloResultante = multiplicarArreglo([1,2,3],[4,5,6]);
arregloResultante = multiplicarArreglo(arregloResultante,[2,1,2],);
arregloResultante = multiplicarArreglo(arregloResultante,[1,2,1],);

console.log("Multiplicacion de Arreglos")
console.log("Array resultante: "+ arregloResultante);