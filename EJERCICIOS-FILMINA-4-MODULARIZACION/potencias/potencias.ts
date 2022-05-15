let datoBase = document.getElementById("datoBase");
let datoExponente = document.getElementById("datoExponente");
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => {
    let base : number = Number(datoBase.value);
    let exponente : number = Number(datoExponente.value);
    
    function calcularPotencia (base:number, exponente:number) : number {
        let resultado : number = 1;
        if (exponente === 0) {
            return resultado;
        }
        else {
            for (let i : number = 1; i <= exponente; i++) {
                resultado *= base;
            }
            return resultado;
        }
    }

    if (exponente >= 0) {
        console.log ("El resultado de la potencia es: ", calcularPotencia(base,exponente));
    }
    else {
        console.log ("Ingrese un exponente mayor o igual a cero")
    }

});