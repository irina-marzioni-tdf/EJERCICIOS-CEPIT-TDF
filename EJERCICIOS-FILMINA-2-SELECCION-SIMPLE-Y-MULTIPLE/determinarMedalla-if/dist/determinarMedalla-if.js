var rotulo = document.getElementById("rotulo");
var datoPosicion = document.getElementById("datoPosicion");
var btnIngresar = document.getElementById("btnIngresar");
rotulo.innerHTML = "Ingrese la posición lograda";
btnIngresar.addEventListener("click", function () {
    var posicion = Number(datoPosicion.value);
    if (posicion == 1) {
        console.log("Entregar Medalla de Oro");
    }
    else {
        if (posicion == 2) {
            console.log("Entregar Medalla de Plata");
        }
        else {
            if (posicion == 3) {
                console.log("Entregar Medalla de Bronce");
            }
            else {
                console.log("Entregar Certificado de Participación");
            }
        }
    }
});
