var datoPrecio = document.getElementById("datoPrecio");
var datoCantidad = document.getElementById("datoCantidad");
var datoMes = document.getElementById("datoMes");
var rotulo1 = document.getElementById("rotulo1");
var rotulo2 = document.getElementById("rotulo2");
var rotulo3 = document.getElementById("rotulo3");
var btnCalcular = document.getElementById("btnCalcular");
rotulo1.innerHTML = "Ingrese el Precio del Producto";
rotulo2.innerHTML = "Ingrese cantidad";
rotulo3.innerHTML = "Ingrese el Mes";
btnCalcular.addEventListener("click", function () {
    var precioTotal = Number(datoPrecio.value) * Number(datoCantidad.value);
    var precioDescuento = precioTotal * 0.85;
    if ((datoMes.value == "octubre") || (datoMes.value == "Octubre") || (datoMes.value == "OCTUBRE")) {
        console.log("SI corresponde descuento del 15% por ser mes de aniversario");
        console.log("  Mes: ", datoMes.value);
        console.log("  Precio Total: ", precioTotal);
        console.log("  Precio Final: ", precioDescuento);
    }
    else {
        console.log("NO corresponde descuento del 15% por ser mes de aniversario");
        console.log("  Mes: ", datoMes.value);
        console.log("  Precio Total: ", precioTotal);
        console.log("  Precio Final: ", precioTotal);
    }
});
