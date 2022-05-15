let datoNro = document.getElementById("datoNro");
let btnIngreso = document.getElementById("btnIngreso");
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Ingrese un número";
btnIngreso.addEventListener("click", () => {
    let nro : number = Number(datoNro.value);
    if (nro == 0) {
        console.log("El número ingresado es CERO (0)");
    } 
    else {
        if ((nro % 2) == 0) {
            console.log("El número ingresado es PAR"); 
        } 
        else {
            console.log("El número ingresado es IMPAR");
        }
    }
});