let arrayNombres: string[] = new Array(2);
let arrayNumeros: number[] = new Array(3);


function cargarNombres(arrayNombres:string[]) {
    let i:number;
    for(i = 0; i < arrayNombres.length; i++) {
        arrayNombres[i] = String(prompt("ingrese un nombre:"));
    }
}

function cargarNumeros(arrayNumeros:number[]) {
    let i:number;
    for(i = 0; i < arrayNumeros.length; i++) {
        arrayNumeros[i] = Number(prompt("ingrese un número:"));
    }
}

function imprimirNombres(arrayNombres:string[]) {
    let i:number;
    for(i = 0; i < arrayNombres.length; i++) {
        console.log(`Nommbre de la posición ${i} = ${arrayNombres[i]}`);
    }
}

function imprimirNumeros(arrayNumeros:number[]) {
    let i:number;
    for(i = 0; i < arrayNumeros.length; i++) {
        console.log(`Número de la posición ${i} = ${arrayNumeros[i]}`);
    }
}

cargarNombres(arrayNombres);
cargarNumeros(arrayNumeros);

imprimirNombres(arrayNombres);
imprimirNumeros(arrayNumeros);

//console.log(arrayNombres);
//console.log(arrayNumeros);