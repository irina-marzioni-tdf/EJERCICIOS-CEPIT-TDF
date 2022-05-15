var btnEjecutar4 = document.getElementById("btnEjecutar4");
btnEjecutar4.addEventListener("click", function () {
    var numero1 = Number(prompt("Ingrese el Primer número"));
    var numero2 = Number(prompt("Ingrese el Segundo número"));
    var sumatoria = 0;
    for (var i = numero1; i <= numero2; i++) {
        sumatoria += i;
    }
    alert("La sumatoria de los números entre " + numero1 + " y " + numero2 + " es: " + sumatoria);
});
