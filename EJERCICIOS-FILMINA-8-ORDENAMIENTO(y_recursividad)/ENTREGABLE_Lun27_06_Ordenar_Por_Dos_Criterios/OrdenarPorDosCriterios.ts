/*
console.clear();
let nombres: string[] = ["Nicolas", "Cristian", "Camila", "Paula", "Enzo", "Mara", "Diego"];
let anios: number[] =  [25, 18, 27, 18, 19, 25, 21];
let alturas: number[] = [177, 178, 175, 171, 181, 165, 169];
*/


let longitud: number = 7;
let nombres: string[] = new Array(longitud);
let anios : number[] = new Array(longitud);
let alturas : number[] = new Array(longitud);


function intercambiarValores(array: any[], x: number, y:number) {
    let aux: any;
    aux = array[x];
    array[x] = array[y];
    array[y] = aux;
}


function ordenarDatos() {
    for (let i:number = 0; i < anios.length; i++) {
        for (let j:number = 0; j < anios.length; j++) {
            if (anios[j] > anios[j+1]) {
                intercambiarValores(anios, j, j+1);
                intercambiarValores(nombres, j, j+1);
                intercambiarValores(alturas, j, j+1);
            } else if (anios[j] == anios[j+1]) {
                if (alturas[j] > alturas[j+1]) {
                    intercambiarValores(anios, j, j+1);
                    intercambiarValores(nombres, j, j+1);
                    intercambiarValores(alturas, j, j+1);
                }
            }
        }
    }
}


function imprimirDatos() {
    for (let i:number = 0; i < nombres.length; i++) {
        console.log(`Dato Persona Nro ${i+1}\n    Nombre: ${nombres[i]}   Edad: ${anios[i]}   Altura: ${alturas[i]}cm`)
    }
}


function cargarDatos() {
    for (let i: number = 0; i < longitud; i++) {
         nombres[i] = String(prompt(`Cargar dato Nro ${i+1}\nIngrese el nombre:`));
         anios[i] = Number(prompt(`Cargar dato Nro ${i+1}\nIngrese la edad:`));
         alturas[i] = Number(prompt(`Cargar dato Nro ${i+1}\nIngrese la altura en cm:`,"Ej: 178"));
    }
}



cargarDatos();
imprimirDatos();
console.log("Ordenamiento de Datos:");
ordenarDatos();
imprimirDatos();