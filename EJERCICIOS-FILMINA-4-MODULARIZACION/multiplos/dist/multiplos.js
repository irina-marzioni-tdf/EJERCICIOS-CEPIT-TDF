var datoNro1 = document.getElementById("datoNro1");
var datoNro2 = document.getElementById("datoNro2");
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", function () {
    var numero1 = Number(datoNro1.value);
    var numero2 = Number(datoNro2.value);
    function esMultiplo(numero1, numero2) {
        return numero1 % numero2 == 0;
    }
    console.log("¿" + numero1 + " es múltiplo de " + numero2 + "?: ", esMultiplo(numero1, numero2));
});
