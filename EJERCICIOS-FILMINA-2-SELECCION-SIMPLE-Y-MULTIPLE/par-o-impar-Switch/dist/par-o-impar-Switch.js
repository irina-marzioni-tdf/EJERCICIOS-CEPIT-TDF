var datoNro = document.getElementById("datoNro");
var btnIngreso = document.getElementById("btnIngreso");
var rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese un número";
btnIngreso.addEventListener("click", function () {
    var nro = Number(datoNro.value);
    if (nro === 0) {
        console.log("El número ingresado es CERO (0)");
    }
    else {
        switch (nro % 2) {
            case 0:
                console.log("El número ingresado es PAR");
                break;
            default:
                console.log("El número ingresado es IMPAR");
        }
    }
});
