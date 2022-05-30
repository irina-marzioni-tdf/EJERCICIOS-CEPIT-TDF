let array:number[] = new Array(10);

function imprimirArray(array:number[]){
    for (let i:number = 0; i < array.length; i++) {
        console.log(`Posicion ${i} = ${array[i]}`);
    }
}

function completarArrayAlAzar (array:number[]) {
    for (let i :number = 0; i < array.length; i++){
        array[i] = Math.floor(Math.random() * 100);
    }
}

completarArrayAlAzar(array);
imprimirArray(array);