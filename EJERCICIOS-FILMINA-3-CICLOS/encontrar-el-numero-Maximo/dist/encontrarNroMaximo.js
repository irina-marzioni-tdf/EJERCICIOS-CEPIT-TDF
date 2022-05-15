var btnEjecutar6 = document.getElementById("btnEjecutar6");
btnEjecutar6.addEventListener("click", function () {
    var maximo = 0;
    var numero = 1;
    while (numero != 0) {
        numero = Number(prompt("Ingrese un número (0 para finalizar)"));
        console.log(numero); //adicional para luego verificar resultados
        if (numero != 0) {
            if ((maximo === 0) && (numero < 0)) {
                maximo = numero;
            }
            if (numero > maximo) {
                maximo = numero;
            }
        }
    }
    alert("El número máximo ingresado fue: " + maximo);
});
