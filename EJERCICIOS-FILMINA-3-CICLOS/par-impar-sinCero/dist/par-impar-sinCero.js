// ejercicio: ¿NUMERO PAR O IMPAR? (SIN ANALIZAR EL NUMERO CERO)
var btnEjecutar3 = document.getElementById("btnEjecutar3");
btnEjecutar3.addEventListener("click", function () {
    var numero = 0;
    while (numero === 0) {
        numero = Number(prompt("Ingrese un número"));
        if (numero != 0) {
            if (numero % 2 === 0) {
                alert("El número ingresado es PAR");
            }
            else {
                alert("El número ingresado es IMPAR");
            }
        }
    }
});
