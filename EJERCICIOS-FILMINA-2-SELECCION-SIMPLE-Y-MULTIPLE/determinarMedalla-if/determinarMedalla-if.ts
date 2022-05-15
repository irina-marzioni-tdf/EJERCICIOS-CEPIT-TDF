let rotulo = document.getElementById("rotulo");
let datoPosicion = document.getElementById("datoPosicion");
let btnIngresar = document.getElementById("btnIngresar");

rotulo.innerHTML = "Ingrese la posición lograda";
btnIngresar.addEventListener("click", () => {
    let posicion : number = Number(datoPosicion.value);

    if (posicion == 1) {
        console.log("Entregar Medalla de Oro");
    } else {
        if (posicion == 2) {
            console.log("Entregar Medalla de Plata");
        } else {
            if (posicion == 3) {
                console.log("Entregar Medalla de Bronce");
            } else {
                console.log("Entregar Certificado de Participación");
            }
        }
    }
});