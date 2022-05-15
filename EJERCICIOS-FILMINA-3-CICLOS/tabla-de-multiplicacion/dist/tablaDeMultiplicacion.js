var btnEjecutar5 = document.getElementById("btnEjecutar5");
btnEjecutar5.addEventListener("click", function () {
    var numero = Number(prompt("Ingrese el número"));
    var limiteProducto = Number(prompt("Ingrese hasta qué número se deberá multiplicar"));
    console.log("Tabla del " + numero + " (hasta el " + limiteProducto + "):");
    for (var i = 1; i <= limiteProducto; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
    alert("Diríjase a la consola para ver la tabla de multiplicar del número ingresado.");
});
