//EJERCICIO REPASO
// CALCULAR PROMEDIO
/*
El DT de los infantiles del equipo de futbol desea saber 
el promedio de la eedad de los chicos

La edad de los chicos  va de 3 a 7 años. 
Las edades son cargadas al azar 
(use la funcion aleatorio(menorValor,mayorValor)), 
es decir aleatorio(3,7)


muestre todas las edades y el promedio de las mismoas
*/

let cant_chicos:number = Number(prompt("Ingrese la cantidad de chicos"));
let promedio_edad:number= 0;
let listadoEdades:number[] = new Array(cant_chicos)

function aleatorio(menorValor:number,mayorValor:number):number{
    let edad:number=0;
    while ((edad < menorValor) || (edad > mayorValor)) {
        edad = Math.floor(Math.random()*10);
    }
    return edad;
}

function cargarEdades (dimension:number):number[] {
    let edades:number[] = new Array(dimension)
    for (let i:number = 0; i < edades.length; i++){
        edades[i] = aleatorio(3,7);
    }
    return edades;
}

function imprimirEdades(edades:number[]){
    for (let i:number = 0; i < edades.length; i++){
        console.log(`Edad de la posición ${i} = ${edades[i]}`);
    }
}

function calcularPromedioDeEdad (edades:number[]): number {
    let sumatoria_edades:number=0;
    let promedio:number = 0;
    for (let i:number = 0; i < edades.length; i++){
        sumatoria_edades += edades[i];
    }
    promedio = sumatoria_edades / edades.length;

    return Number(promedio.toFixed());
}


listadoEdades = cargarEdades(cant_chicos);
promedio_edad = calcularPromedioDeEdad(listadoEdades);
imprimirEdades(listadoEdades);
console.log("El promedio de edad de los chicos es de " + promedio_edad + " años");