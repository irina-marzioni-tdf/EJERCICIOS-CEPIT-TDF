var datoBase = document.getElementById("datoBase");
var datoExponente = document.getElementById("datoExponente");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var base = Number(datoBase.value);
    var exponente = Number(datoExponente.value);
    function calcularPotencia(base, exponente) {
        var resultado = 1;
        if (exponente === 0) {
            return resultado;
        }
        else {
            for (var i = 1; i <= exponente; i++) {
                resultado *= base;
            }
            return resultado;
        }
    }
    if (exponente >= 0) {
        console.log("El resultado de la potencia es: ", calcularPotencia(base, exponente));
    }
    else {
        console.log("Ingrese un exponente mayor o igual a cero");
    }
});
