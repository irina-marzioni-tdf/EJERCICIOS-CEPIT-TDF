var datoNro1 = document.getElementById("datoNro1");
var datoNro2 = document.getElementById("datoNro2");
var datoOpcion = document.getElementById("datoOpcion");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var numero1 = Number(datoNro1.value);
    var numero2 = Number(datoNro2.value);
    var opcion = Number(datoOpcion.value);
    if (opcion === 1) {
        console.log("----------------------------------------");
        console.log("El resultado de la suma es: ", numero1 + numero2);
        console.log("----------------------------------------");
    }
    else {
        if (opcion === 2) {
            console.log("----------------------------------------");
            console.log("El resultado de la resta es: ", numero1 - numero2);
            console.log("----------------------------------------");
        }
        else {
            console.log("Fin del programa");
        }
    }
});
