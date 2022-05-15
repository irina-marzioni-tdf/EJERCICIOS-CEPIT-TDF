var datoNro1 = document.getElementById("datoNro1");
var datoNro2 = document.getElementById("datoNro2");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var numero1 = Number(datoNro1.value);
    var numero2 = Number(datoNro2.value);
    var suma = numero1 + numero2;
    console.log("El resultado de la suma es: ", suma);
});
