let dimension:number = Number(prompt("Ingrese la dimensión del array: "));
let array:number[] = new Array(dimension);

function imprimirArrayAlReves(array:number[]){
    let i:number = array.length - 1;
    for (i; i >= 0; i--) {
        console.log(`Posición ${i} = ${array[i]}`);
    }
}

function completarArray (array:number[]) {
    for (let i:number = 0; i < array.length; i++){
        array[i] = Number(prompt(`Ingrese un número para la posición ${i}`));
    }
}

completarArray(array);
imprimirArrayAlReves(array);