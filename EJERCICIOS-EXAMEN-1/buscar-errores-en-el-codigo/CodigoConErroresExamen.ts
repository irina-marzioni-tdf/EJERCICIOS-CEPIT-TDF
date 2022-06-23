/*

function multiplicarEntreNumeros (min:number, max:number, cantNum:number):number {
    let resultado:number = 0;
    let numIng: number = 0;
    let i: number = 1;
    while (i <= cantNum) {
        numIng = Number(prompt("Ingrese un numero: "));
        if ((numIng >= min) && (numIng <= max)) {
            resultado = numIng;
        }
    }

    return cantNum;
}


Errores:
 1) La variable i perteneciente al while (i<= cantNum) nunca incrementa su valor, por lo que el while generaria un bucle infinito.
    SOLUCION para el bucle infinito: al final del while colocar un i++
        while (i <= cantNum) {
            numIng = Number(prompt("Ingrese un numero: "));
            if ((numIng >= min) && (numIng <= max)) {
                resultado = numIng;
            }
            i++                           <----  solucion al bucle infinito
        }

 2) La funcion tiene como objetico realizar multiplicaciones entre numero, pero en esta funcion NUNCA se hace una multiplicacion. 
    Falto usar el operador * 
    SOLUCION: resultado = resultado*numIng

 3) La variable "resultado" esta inicializada en 0 (let resultado:number = 0) y cuando ingresemos un numero mediante el prompt se realizara
    una multiplicacion de resultado*numIng y daria siempre cero ya que estariamos haciendo siempre 0*numIng.
    SOLUCION: deberiamos asignarle a resultado  el valor 1.  let resultado:number = 1
 
 4) la funcion "multiplicarEntreNumeros" NUNCAdevuelve el resultado de las multiplicaciones.Lo que si devuelve el el valor de cantNum.
    SOLUCION en el return cambiar la variable cantNum por la variable resultado.
        function multiplicarEntreNumero (parametros):number {
            declaracion de variables
            ... 
            proceso de calculo
            ....
            return resultado;                <--- SOLUCION
        }
                   
*/


function multiplicarEntreNumeros (min:number, max:number, cantNum:number):number {
    let resultado:number = 1;  // Corregido
    let numIng: number = 0;
    let i: number = 1;
    while (i <= cantNum) {
        numIng = Number(prompt("Ingrese un numero: "));
        if ((numIng >= min) && (numIng <= max)) {
            resultado *= numIng;    //Corregido
        }
        i++     //Agregado
    }

    return resultado; //Corregido
}

console.log(multiplicarEntreNumeros(4,8,4));