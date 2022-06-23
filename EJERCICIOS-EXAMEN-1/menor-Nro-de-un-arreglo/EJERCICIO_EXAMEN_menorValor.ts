/*Realizar una función que devuelva el menor valor de un arreglo de valores numéricos. 
El arreglo estará cargado con datos aleatorios y con dimensión ingresada por el usuario.
*/
let longitudArray:number = Number(prompt("Ingrese la longitud del arreglo:"));
let arreglo: number[] = new Array(longitudArray);
let valorMenor:number = 0;

function encontrarValorMenor (array:number[]): number {
    let menor:number = array[0];
    for (let i:number = 1; i < array.length; i++) {
        if (array[i]< menor) {
            menor = array[i];
        }
    }
    return menor;
}

function imprimirArray (array:number[]) {
    for (let i:number = 0; i < array.length; i++) {
        console.log(`   Posicion [${i}] = ${array[i]}`);
    }
}

function aleatorio ():number {
    let nroAleatorio:number = 0;
    nroAleatorio = Math.floor(Math.random()*100); // genera un nuemro de 0 a 99
    //nroAleatorio = Math.floor(Math.random()*21) + 20; // genera un nro random entre 20 y 40
    // nroAleatorio = Math.floor(Math.random() * ((maximo-minimo)-1))) + minimo; // genera un nro random entre un minimo y maximo
    return nroAleatorio;
}

function cargarArray (longitud:number) {
    let array:number[] = new Array (longitud);

    for (let i:number = 0; i < longitud; i++) {
        array[i] = aleatorio();
    }
    return array;
}


arreglo = cargarArray(longitudArray);
console.log("Contenido del Arreglo:");
imprimirArray(arreglo);
valorMenor = encontrarValorMenor(arreglo);

console.log(`El menor valor del arreglo es: ${valorMenor}`);



/* 
SEGUNDO EJERCICIO DEL EXAMEN
¿QUE HACE EL SIGUIENTE CODIGO?
La funcion recibe un arreglo de numeros, busca numero mayor que se encuentra en el arreglo y luego lo imprime por consola. 
En este caso,  el valor mayor del arreglo es 9. Por lo tanto la función  imprimira por consola -->  m: 9
*/