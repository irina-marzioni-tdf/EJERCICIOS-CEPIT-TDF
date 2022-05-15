var datoNro1 = document.getElementById("datoNro1");
var datoNro2 = document.getElementById("datoNro2");
var datoOpcion = document.getElementById("datoOpcion");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var numero1 = Number(datoNro1.value);
    var numero2 = Number(datoNro2.value);
    var opcion = Number(datoOpcion.value);
    function dibujarNguiones(cantidad) {
        var linea = "";
        for (var i = 1; i <= cantidad; i++) {
            linea += "-";
        }
        console.log(linea);
    }
    function calcularResultado(numero1, numero2, opcion) {
        var resultado = 0;
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
        console.log("Fin del programa");
    }
    else {
        dibujarNguiones(40);
        console.log("El resultado de la operación es:", calcularResultado(numero1, numero2, opcion));
        dibujarNguiones(40);
    }
});
