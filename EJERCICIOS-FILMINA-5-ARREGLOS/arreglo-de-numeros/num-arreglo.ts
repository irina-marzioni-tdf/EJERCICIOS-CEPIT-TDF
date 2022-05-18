let num: number[] = [20, 14, 8 , 0, 5 , 19 , 24]

function arregloDeNumeros (num:number[])  {
    console.log("longitud del arreglo: ",num.length);
    console.log("contenido del arreglo:",num);
}

function impresionNum(num:number[]) {
    let indice:number = 0;
    while (indice < num.length){
        console.log("La posicion ",indice," contiene el elemento ",num[indice]);
        indice++;
    }
    
}
function nuevoArray () {
    let arreglo : number[] = new Array (3);
    arreglo[1] = 20;
    arreglo[2] = 14;
    arreglo[3] = 8;
    console.log(arreglo[1]);
    console.log(arreglo[2]);
    console.log(arreglo[3]);
}
arregloDeNumeros(num);
console.log("nuevo arreglo:");
nuevoArray();
impresionNum(num);


