var datoNro = document.getElementById("datoNro");
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    var numero = Number(datoNro.value);
    function cantidadDeDivisores(numero) {
        var cantidad = 0;
        for (var i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                cantidad++;
            }
        }
        return cantidad;
    }
    console.log("La cantidad de divisores que tiene el número " + numero + " es: ", cantidadDeDivisores(numero));
});
