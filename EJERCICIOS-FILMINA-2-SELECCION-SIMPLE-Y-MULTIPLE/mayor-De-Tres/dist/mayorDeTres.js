var datoNro1 = document.getElementById("datoNro1");
var datoNro2 = document.getElementById("datoNro2");
var datoNro3 = document.getElementById("datoNro3");
var rotulo1 = document.getElementById("rotulo1");
var rotulo2 = document.getElementById("rotulo2");
var rotulo3 = document.getElementById("rotulo3");
var btnComparar = document.getElementById("btnComparar");
rotulo1.innerHTML = "Ingrese el Primer Número";
rotulo2.innerHTML = "Ingrese el Segundo Número";
rotulo3.innerHTML = "Ingrese el Tercer Número";
btnComparar.addEventListener("click", function () {
    var nro1 = Number(datoNro1.value);
    var nro2 = Number(datoNro2.value);
    var nro3 = Number(datoNro3.value);
    var mayor;
    if (nro1 > nro2) {
        mayor = nro1;
    }
    else {
        mayor = nro2;
    }
    if (mayor > nro3) {
        console.log("El número mayor ingresado es ", mayor);
    }
    else {
        mayor = nro3;
        console.log("El número mayor ingresado es ", mayor);
    }
});
