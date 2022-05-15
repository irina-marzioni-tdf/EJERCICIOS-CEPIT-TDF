let datoAltura = document.getElementById("datoAltura");
let datoBase = document.getElementById("datoBase");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    let altura: number = Number(datoAltura.value);
    let base: number = Number (datoBase.value);
    let area: number = base * altura;
    console.log ("El área del rectángulo es: ", area);
});