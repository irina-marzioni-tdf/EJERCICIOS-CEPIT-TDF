let datoNro = document.getElementById("datoNro");
let btnIngreso = document.getElementById("btnIngreso");
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Ingrese un número";
btnIngreso.addEventListener("click", () => {
    let nro : number = Number(datoNro.value);
    if (nro === 0) {
        console.log("El número ingresado es CERO (0)");
    } 
    else {
        switch (nro % 2) {
            case 0:
                console.log("El número ingresado es PAR");
                break;
            default:
                console.log("El número ingresado es IMPAR");
        }
    }
});