var datoNro1 = document.getElementById("datoNro1");
var datoNro2 = document.getElementById("datoNro2");
var datoOpcion = document.getElementById("datoOpcion");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var numero1 = Number(datoNro1.value);
    var numero2 = Number(datoNro2.value);
    var opcion = Number(datoOpcion.value);
    var lineaX40 = "";
    for (var i = 1; i <= 40; i++) {
        lineaX40 += "-";
    }
    if (opcion === 1) {
        console.log(lineaX40);
        console.log("El resultado de la suma es: ", numero1 + numero2);
        console.log(lineaX40);
    }
    else {
        if (opcion === 2) {
            console.log(lineaX40);
            console.log("El resultado de la resta es: ", numero1 - numero2);
            console.log(lineaX40);
        }
        else {
            console.log("Fin del programa");
        }
    }
});
