let dimension:number = Number(prompt("Ingrese la dimensión del array: "));
let array:number[] = new Array(dimension);
let cantPositivos:number = 0;
let cantNegativos:number = 0;
let cantCeros:number = 0;

function cantidadDePositivos(array:number[]):number{
    let positivos:number = 0;
    for (let i:number = 0; i < array.length; i++){
        if (array[i] > 0) {
            positivos += 1;
        }
    }
    return positivos;
} 

function cantidadDeNegativos(array:number[]):number {
    let negativos:number = 0;
    for (let i:number = 0; i < array.length; i++){
        if (array[i] < 0) {
            negativos += 1;
        }
    }
    return negativos;
} 

function cantidadDeCeros(array:number[]):number {
    let ceros:number = 0;
    for (let i:number = 0; i < array.length; i++){
        if (array[i] == 0) {
            ceros += 1;
        }
    }
    return ceros;
} 

function completarArray (array:number[]) {
    for (let i:number = 0; i < array.length; i++){
        array[i] = Number(prompt(`Ingrese un número para la posición ${i}`));
    }
}

completarArray(array);

cantNegativos = cantidadDeNegativos(array);
cantPositivos = cantidadDeCeros(array);
cantCeros = cantidadDePositivos(array);

console.log(`Cantidad de Ceros: ${cantCeros}`);
console.log(`Cantidad de negativos: ${cantNegativos}`);
console.log(`Cantidad de Positivos: ${cantPositivos}`);