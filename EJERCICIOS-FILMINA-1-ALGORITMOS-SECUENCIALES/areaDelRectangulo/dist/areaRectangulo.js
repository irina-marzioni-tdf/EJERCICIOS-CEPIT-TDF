var datoAltura = document.getElementById("datoAltura");
var datoBase = document.getElementById("datoBase");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var altura = Number(datoAltura.value);
    var base = Number(datoBase.value);
    var area = base * altura;
    console.log("El área del rectángulo es: ", area);
});
