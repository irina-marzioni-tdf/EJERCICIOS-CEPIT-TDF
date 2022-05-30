let dimension:number = Number(prompt("Ingrese la dimensión del array: "));
let array:number[] = new Array(dimension);

function mostrarCantPositivoNegativoCero(array:number[]) {
    let cantPositivos:number = 0;
    let cantNegativos:number = 0;
    let cantCeros:number = 0;

    for (let i:number = 0; i < array.length; i++){
        switch(array[i]){
            case 0:
                cantCeros += 1;  
                break;
            default:
                if (array[i] > 0){
                    cantPositivos += 1;
                }
                else {
                    cantNegativos += 1;
                }
                break;
        }
    }
    console.log(`Cantidad de Positivos: ${cantPositivos}`);
    console.log(`Cantidad de Negativos: ${cantNegativos}`);
    console.log(`Cantidad de Ceros: ${cantCeros}`);
}

function completarArray (array:number[]) {
    for (let i:number = 0; i < array.length; i++){
        array[i] = Number(prompt(`Ingrese un número para la posición ${i}`));
    }
}

completarArray(array);
mostrarCantPositivoNegativoCero(array);
