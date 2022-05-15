var btnEjecutar7 = document.getElementById("btnEjecutar7");
btnEjecutar7.addEventListener("click", function () {
    var minimo = 0;
    var numero = 1;
    while (numero != 0) {
        numero = Number(prompt("Ingrese un número (0 para finalizar)"));
        console.log(numero); //adicional para luego verificar resultados
        if (numero != 0) {
            if (minimo === 0) {
                minimo = numero;
            }
            if (numero < minimo) {
                minimo = numero;
            }
        }
    }
    alert("El número minimo ingresado fue: " + minimo);
});
