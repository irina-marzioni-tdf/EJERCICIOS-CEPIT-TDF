let precio = document.getElementById("precioProducto");
let cantidad = document.getElementById("cantidadProducto");
let btnCalculo = document.getElementById("btnCalcular");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el Precio del Producto";
rotulo2.innerHTML = "Ingrese Cantidad";

// muestra el Precio final de compra (con o sin descuento) al presionar boton 
btnCalculo.addEventListener("click", () => {    
    // calculo del precio total (precio del producto * cantidad de producto)
    let precioTotal : number = Number(precio.value) * Number(cantidad.value); 

    // Verificacion de descuento 
    if (precioTotal > 1000) {   
        console.log("SI corresponde descuento (10%)");
        console.log("  Monto total: ", precioTotal)
        precioTotal*=0.90;  
        console.log("  Monto Final a pagar: ", precioTotal)
    } else {
        console.log("NO corresponde descuento (10%)");
        console.log("  Monto total: ", precioTotal)
        console.log("  Monto Final a pagar: ", precioTotal)
    }
});