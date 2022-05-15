var datoBase = document.getElementById("datoBase");
var datoAltura = document.getElementById("datoAltura");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var base = Number(datoBase.value);
    var altura = Number(datoAltura.value);
    function calcularAreaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
    console.log("El área del triángulo es: ", calcularAreaTriangulo(base, altura));
});
