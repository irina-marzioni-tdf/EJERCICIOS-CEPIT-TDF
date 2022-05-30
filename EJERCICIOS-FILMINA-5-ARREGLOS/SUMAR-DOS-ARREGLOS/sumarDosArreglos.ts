let vector1: number[] = new Array (6);
let vector2: number[] = new Array (6);
let vectorResultante : number[] = new Array (6);

function cargarVector (vector:number[]) {
    for (let i:number = 0; i < 6; i++) {
        vector[i] = Number(prompt("Ingrese el valor " + (i+1) + " : "));
    }
}

function sumarVectores (vector1, vector2, vectorResultante:number[]) {
    for (let i:number = 0; i < 6; i++ ) {
        vectorResultante[i] = vector1[i] + vector2[i];
    }
}

alert("Carga de números para el vector 1")
cargarVector(vector1);
alert("Carga de números para el vector 2")
cargarVector(vector2);

sumarVectores(vector1,vector2,vectorResultante);

alert("El resultado de la suma entre vector 1 y vector 2 se mostrará por consola")
console.log ("vector 1 + vector 2 = vector resultante");
for (let i:number = 0; i < 6; i++ ) {
    console.log(vector1[i] + " + " + vector2[i] + " = " + vectorResultante[i]);
}
