var datoVuelta1 = document.getElementById("datoVuelta1");
var datoVuelta2 = document.getElementById("datoVuelta2");
var datoVuelta3 = document.getElementById("datoVuelta3");
var datoVuelta4 = document.getElementById("datoVuelta4");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var tiempoTotal = Number(datoVuelta1.value) + Number(datoVuelta2.value) + Number(datoVuelta3.value) + Number(datoVuelta4.value);
    var promedioVuelta = tiempoTotal / 4;
    console.log("El tiempo total es: ", tiempoTotal, " minutos");
    console.log("El promedio de velta es: ", promedioVuelta, " minutos");
});
