let datoNro1 = document.getElementById ("datoNro1");
let datoNro2 = document.getElementById ("datoNro2");
let datoOpcion = document.getElementById ("datoOpcion");
let btnCalcular = document.getElementById ("btnCalcular");
btnCalcular.addEventListener ("click", () => {
    let numero1 : number = Number(datoNro1.value);
    let numero2 : number = Number(datoNro2.value);
    let opcion : number = Number(datoOpcion.value);
    
    function dibujarNguiones (cantidad:number){
        let linea : string = "";
        for (let i : number = 1; i <= cantidad; i++) {
            linea += "-";
        }
        console.log (linea);
    }

    function calcularResultado (numero1 : number, numero2 : number, opcion : number) : number {
        let resultado : number = 0;
        if (opcion === 1) {
            resultado = numero1 + numero2;
        }
        else { 
            if (opcion === 2) {
                resultado = numero1 - numero2;
            }
        }
        return resultado;
    }
    
    if ((opcion < 1) || (opcion > 2)) {
       console.log ("Fin del programa"); 
    }
    else {
        dibujarNguiones (40);
        console.log("El resultado de la operación es:", calcularResultado (numero1,numero2,opcion));
        dibujarNguiones (40);
    }
});