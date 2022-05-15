let datoNro = document.getElementById("datoNro");
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => {
    let numero : number = Number(datoNro.value);
    function cantidadDeDivisores (numero : number) : number {
        let cantidad : number = 0;
        for (let i : number = 1; i <= numero; i++){
            if (numero % i === 0) { 
                cantidad++;
            }
        }
     return cantidad;
    }
    console.log ("La cantidad de divisores que tiene el número " + numero + " es: ", cantidadDeDivisores(numero));
});

