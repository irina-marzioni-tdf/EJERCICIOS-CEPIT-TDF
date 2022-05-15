var btnEjecutar10 = document.getElementById("btnEjecutar10");
btnEjecutar10.addEventListener("click", function () {
    var nombreAlumno = "nombre";
    var notaPractica = 0;
    var notaProblemas = 0;
    var notaTeorica = 0;
    var notaFinal = 0;
    var error;
    while (nombreAlumno != "") {
        error = 0; // Para que no se acumulen lo errores en los próximos ciclos.
        nombreAlumno = prompt('Ingrese el Nombre del Alumno  (Para salir no ingrese nada y presione "aceptar"):');
        if (nombreAlumno != "") {
            notaPractica = Number(prompt("Ingrese la nota de la parte Práctica:"));
            if ((notaPractica < 0) || (notaPractica > 10)) {
                error += 1;
            }
            notaProblemas = Number(prompt("Ingrese la nota de la parte de Problemas:"));
            if ((notaProblemas < 0) || (notaProblemas > 10)) {
                error += 1;
            }
            notaTeorica = Number(prompt("Ingrese la nota de la parte Teórica:"));
            if ((notaTeorica < 0) || (notaTeorica > 10)) {
                error += 1;
            }
            if (error === 0) { // Si no hubo errores, es decir si el ingreso de notas fue correcto. se denomina notas a los números entre [0...10]
                notaFinal = (notaPractica * 0.10) + (notaProblemas * 0.50) + (notaTeorica * 0.40);
                alert("Nota Final: " + notaFinal.toFixed(1));
            }
            else {
                alert("ERROR!");
            }
        }
    }
});
