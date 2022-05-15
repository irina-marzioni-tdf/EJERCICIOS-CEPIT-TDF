let datoNro1 = document.getElementById("datoNro1");
let datoNro2 = document.getElementById("datoNro2");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    let numero1: number = Number(datoNro1.value);
    let numero2: number = Number (datoNro2.value);
    let suma: number = numero1 + numero2;
    console.log ("El resultado de la suma es: ", suma);
});