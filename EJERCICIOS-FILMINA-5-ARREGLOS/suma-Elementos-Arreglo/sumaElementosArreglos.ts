let dimension:number = Number(prompt("Ingrese la dimensión del arreglo:"));
let arregloNumeros:number[] = new Array(dimension);
let sumatoriaDelArreglo:number = 0;

function cargarNumeros (arregloNumeros:number[]) {
    let i:number;
    for (i = 0; i < arregloNumeros.length; i++) {
        arregloNumeros[i] = Number(prompt(`Ingrese un número para la posición ${i} :`));
    }
}
function imprimirArray(arregloNumeros:number[]) {
    let i:number;
    for(i = 0; i < arregloNumeros.length; i++) {
        console.log(`Número de la posición ${i}:  ${arregloNumeros[i]}`);
    }
}

function sumarElementosDelArray (arregloNumeros:number[]): number {
    let i:number;
    let sumatoria:number = 0;
    for (i = 0; i < arregloNumeros.length; i++) {
        sumatoria += arregloNumeros[i];
    }

    return sumatoria;
}

cargarNumeros(arregloNumeros);
imprimirArray(arregloNumeros);
sumatoriaDelArreglo = sumarElementosDelArray(arregloNumeros);
console.log(`La sumatoria de todos los números del array es: ${sumatoriaDelArreglo}`);
