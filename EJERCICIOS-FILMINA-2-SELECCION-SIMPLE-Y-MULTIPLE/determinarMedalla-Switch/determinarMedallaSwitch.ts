let rotulo = document.getElementById("rotulo");
let datoPosicion = document.getElementById("datoPosicion");
let btnIngresar = document.getElementById("btnIngresar");

rotulo.innerHTML = "Ingrese la posición lograda";

btnIngresar.addEventListener("click", () => {
    let posicion : number = Number(datoPosicion.value);

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