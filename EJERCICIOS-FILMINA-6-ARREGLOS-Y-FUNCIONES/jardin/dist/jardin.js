var cantidad_alumnos = Number(prompt("Ingrese la cantidad de infantes:"));
var aula_correspondiente = "";
function asignarAula(cant_infantes) {
    var aula_Azul = 40;
    var aula_Verde = 35;
    var aula_Amarilla = 30;
    var aula_asignada = "";
    if (cant_infantes <= aula_Amarilla) {
        aula_asignada = "Amarrila";
    }
    else {
        if (cant_infantes <= aula_Verde) {
            aula_asignada = "Verde";
        }
        else {
            if (cant_infantes <= aula_Azul) {
                aula_asignada = "Azul";
            }
        }
    }
    return aula_asignada;
}
aula_correspondiente = asignarAula(cantidad_alumnos);
if (aula_correspondiente != "") {
    console.log("Le corresponde el aula " + aula_correspondiente);
}
else {
    console.log("No hay aulas que albergen esa cantidad de alumnos.");
}
