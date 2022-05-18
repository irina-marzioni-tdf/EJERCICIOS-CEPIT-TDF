let nroDimension : number = Number(prompt("Ingrese la cantidad de nombres a ingresar:"));
let arrayNombres : string[] = new Array(nroDimension);

function impresionArrayNombres (arrayNombres:number[]){
    for (let i : number = 0; i < arrayNombres.length; i++) {
        console.log ("La posición ", i+1," contiene el nombre ", arrayNombres[i]);
    }
}

function rellenoArrayNombres (arrayNombres:string[]) {
    for (let i : number = 0; i < arrayNombres.length; i++) {
        arrayNombres[i] = prompt("Ingrese un nombre:");
    }
}


rellenoArrayNombres(arrayNombres);
impresionArrayNombres(arrayNombres);
