//Promedio Escolar
var alumno = "";
var notasTrimestrales;
var promedioAnual = 0;
var notasErroneas = 0;
function informarPromedioAnual(alumno, promedio) {
    alert("El promedio anual de " + alumno + " es de " + promedio);
}
function calcularPromedioAnualdeNotas(notas) {
    var promedio = 0;
    var sumatoriaNotas = 0;
    for (var i = 0; i < notas.length; i++) {
        sumatoriaNotas += notas[i];
    }
    promedio = sumatoriaNotas / notas.length;
    promedio = Number(promedio.toFixed(1));
    return promedio;
}
function InformarErrorDeNotasIncorrectas(notas) {
    var error = 0;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] < 0 || notas[i] > 10) {
            error += 1;
        }
    }
    return error;
}
function cargarNotasTrimestrales() {
    var notas = new Array(3);
    for (var i = 0; i < notas.length; i++) {
        notas[i] = Number(prompt("Ingrese la nota del trimestre " + (i + 1) + ": "));
    }
    return notas;
}
function pedirNombre() {
    var alumno = String(prompt("Ingrese el nombre del alumno: "));
    return alumno;
}
alert("A continuación ingrese el nombre del alumno y sus 3 notas. Para salir ingrese el número 0");
alumno = pedirNombre();
while (alumno != "0") {
    notasTrimestrales = cargarNotasTrimestrales();
    notasErroneas += InformarErrorDeNotasIncorrectas(notasTrimestrales);
    if (notasErroneas === 0) {
        promedioAnual = calcularPromedioAnualdeNotas(notasTrimestrales);
        informarPromedioAnual(alumno, promedioAnual);
    }
    else {
        alert("ERROR! Ingrese una nota correcta entre 0 y 10.");
    }
    alert("A continuación ingrese el nombre del alumno y sus 3 notas. Para salir ingrese el número 0");
    alumno = pedirNombre();
}
