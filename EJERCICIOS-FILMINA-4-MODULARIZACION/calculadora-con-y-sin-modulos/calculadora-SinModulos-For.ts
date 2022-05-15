let datoNro1 = document.getElementById ("datoNro1");
let datoNro2 = document.getElementById ("datoNro2");
let datoOpcion = document.getElementById ("datoOpcion");
let btnCalcular = document.getElementById ("btnCalcular");
btnCalcular.addEventListener ("click", () => {
    let numero1 : number = Number(datoNro1.value);
    let numero2 : number = Number(datoNro2.value);
    let opcion : number = Number(datoOpcion.value);
    let lineaX40 : string = "";

    for (let i : number = 1; i <= 40; i++) {
        lineaX40 += "-";
    }
    if (opcion === 1) {
        console.log (lineaX40);
        console.log ("El resultado de la suma es: ", numero1 + numero2);
        console.log (lineaX40);
    }
    else {
        if (opcion === 2) {
            console.log (lineaX40);
            console.log ("El resultado de la resta es: ", numero1 - numero2);
            console.log (lineaX40);
        }
        else {
            console.log ("Fin del programa");
        }
    }
});