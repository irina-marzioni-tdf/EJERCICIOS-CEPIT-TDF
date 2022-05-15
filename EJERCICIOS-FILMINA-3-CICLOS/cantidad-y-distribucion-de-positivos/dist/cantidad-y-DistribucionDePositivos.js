var btnEjecutar8 = document.getElementById("btnEjecutar8");
btnEjecutar8.addEventListener("click", function () {
    var numero = 1;
    var cantidadPositivos = 0;
    var numerosIngresados = 0;
    var porcentajePositivos = 0;
    while (numero != 0) {
        numero = Number(prompt("Ingrese un número (0 para finalizar)"));
        if (numero != 0) {
            console.log(numero); // adicional para luego verificar
            if (numero > 0) {
                cantidadPositivos += 1;
            }
            numerosIngresados += 1;
            porcentajePositivos = (cantidadPositivos * 100) / numerosIngresados;
        }
    }
    alert("Cantidad de números positivos ingresados : " + cantidadPositivos);
    alert("Porcentaje de números positivos respecto del total ingresado: " + porcentajePositivos.toFixed() + "%");
    alert("Diríjase a la consola para más información");
    //console.log adicionales para verificar
    console.log("cantidad positivos: " + cantidadPositivos);
    console.log("Porcentaje de positivos respecto del total: " + porcentajePositivos);
});
