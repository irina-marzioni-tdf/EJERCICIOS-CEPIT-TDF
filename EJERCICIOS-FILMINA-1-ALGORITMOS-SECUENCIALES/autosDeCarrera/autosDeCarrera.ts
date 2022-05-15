let datoVuelta1 = document.getElementById("datoVuelta1");
let datoVuelta2 = document.getElementById("datoVuelta2");
let datoVuelta3 = document.getElementById("datoVuelta3");
let datoVuelta4 = document.getElementById("datoVuelta4");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    let tiempoTotal : number = Number(datoVuelta1.value) + Number(datoVuelta2.value) + Number(datoVuelta3.value) + Number(datoVuelta4.value);
    let promedioVuelta : number = tiempoTotal/4;
    console.log("El tiempo total es: ",tiempoTotal," minutos");
    console.log("El promedio de velta es: ",promedioVuelta," minutos");
});
