var btnEjecutar9 = document.getElementById("btnEjecutar9");
btnEjecutar9.addEventListener("click", function () {
    var numero = 1;
    var minimo = 0;
    var maximo = 0;
    var promedio = 0;
    var sumatoria = 0;
    var contadorDeNros = 0;
    while (numero != 0) {
        numero = Number(prompt("Ingrese un número (0 para finalizar)"));
        if (numero != 0) {
            console.log(numero); //adicional para luego verificar
            if (minimo === 0) { //se ejecuta una sola vez. Util cuanto el MÍNIMO ingresado es nro negativo. 
                minimo = numero;
            }
            if (numero < minimo) {
                minimo = numero;
            }
            if ((maximo === 0) && (numero < 0)) { //se ejecuta una sola vez. Util cuando el MAYOR ingresado es nro negativo.
                maximo = numero;
            }
            if (numero > maximo) {
                maximo = numero;
            }
            contadorDeNros += 1;
            sumatoria += numero;
        }
    }
    promedio = sumatoria / contadorDeNros;
    alert("Diríjase a la consola para ver los resultados.");
    console.log("El número Máximo ingresado es: " + maximo);
    console.log("El número Mínimo Ingresado es: " + minimo);
    console.log("El promedio de los números ingresados es: " + promedio.toFixed(2));
});
