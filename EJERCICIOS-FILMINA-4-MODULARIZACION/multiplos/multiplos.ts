let datoNro1 = document.getElementById("datoNro1");
let datoNro2 = document.getElementById("datoNro2");
let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", () => {
    let numero1 : number = Number(datoNro1.value);
    let numero2 : number = Number(datoNro2.value);

    function esMultiplo (numero1 : number,numero2 : number) :  boolean {
     return numero1 % numero2 == 0;
    }

    console.log ("¿" + numero1 + " es múltiplo de " + numero2 + "?: ",esMultiplo(numero1,numero2));
});