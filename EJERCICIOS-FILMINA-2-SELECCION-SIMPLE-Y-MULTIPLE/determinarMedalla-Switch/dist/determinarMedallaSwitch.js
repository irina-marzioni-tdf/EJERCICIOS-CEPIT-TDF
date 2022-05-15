var rotulo = document.getElementById("rotulo");
var datoPosicion = document.getElementById("datoPosicion");
var btnIngresar = document.getElementById("btnIngresar");
rotulo.innerHTML = "Ingrese la posición lograda";
btnIngresar.addEventListener("click", function () {
    var posicion = Number(datoPosicion.value);
    switch (posicion) {
        case 1:
            console.log("Entregar Medalla de Oro");
            break;
        case 2:
            console.log("Entregar Medalla de Plata");
            break;
        case 3:
            console.log("Entregar Medalla de Bronce");
            break;
        default:
            console.log("Entregar Certificado de Participación");
    }
});
