let datoPrecio = document.getElementById("datoPrecio");
let datoCantidad = document.getElementById("datoCantidad");
let datoMes = document.getElementById("datoMes");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let btnCalcular = document.getElementById("btnCalcular");

rotulo1.innerHTML = "Ingrese el Precio del Producto";
rotulo2.innerHTML = "Ingrese cantidad";
rotulo3.innerHTML = "Ingrese el Mes";

btnCalcular.addEventListener("click", () => {
    let precioTotal : number = Number(datoPrecio.value) * Number(datoCantidad.value);
    let precioDescuento: number = precioTotal * 0.85;
    if ((datoMes.value == "octubre") || (datoMes.value == "Octubre") || (datoMes.value == "OCTUBRE")){
        console.log("SI corresponde descuento del 15% por ser mes de aniversario")
        console.log("  Mes: ", datoMes.value);
        console.log("  Precio Total: ", precioTotal);
        console.log("  Precio Final: ", precioDescuento);
    }
    else {
        console.log("NO corresponde descuento del 15% por ser mes de aniversario")
        console.log("  Mes: ", datoMes.value);
        console.log("  Precio Total: ", precioTotal);
        console.log("  Precio Final: ", precioTotal);
    }
});