let datoNro1 = document.getElementById("datoNro1");
let datoNro2 = document.getElementById("datoNro2");
let datoNro3 = document.getElementById("datoNro3");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let btnComparar = document.getElementById("btnComparar");

rotulo1.innerHTML = "Ingrese el Primer Número";
rotulo2.innerHTML = "Ingrese el Segundo Número";
rotulo3.innerHTML = "Ingrese el Tercer Número";

btnComparar.addEventListener("click", () => {
    let nro1 : number = Number(datoNro1.value);
    let nro2 : number = Number(datoNro2.value);
    let nro3 : number = Number(datoNro3.value);
    let mayor: number;

    if (nro1 > nro2) {
        mayor = nro1;
    }
    else {
        mayor = nro2;
    }
    if (mayor > nro3) {
        console.log("El número mayor ingresado es ", mayor);
    }
    else {
        mayor = nro3;
        console.log ("El número mayor ingresado es ", mayor);
    }
})