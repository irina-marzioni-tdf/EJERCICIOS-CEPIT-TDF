let btnEjecutar10 = document.getElementById("btnEjecutar10");
btnEjecutar10.addEventListener("click", () => {
  let nombreAlumno: string = "nombre";
  let notaPractica: number = 0;
  let notaProblemas: number = 0;
  let notaTeorica: number = 0;
  let notaFinal: number = 0;
  let error: number;

  nombreAlumno = prompt(
    'Ingrese el Nombre del Alumno  (Para salir no ingrese nada y presione "aceptar"):'
  );

  while (nombreAlumno != "") {
    error = 0; // Para que no se acumulen lo errores en los próximos ciclos.

    notaPractica = Number(prompt("Ingrese la nota de la parte Práctica:"));
    if (notaPractica < 0 || notaPractica > 10) {
      error += 1;
    }

    notaProblemas = Number(prompt("Ingrese la nota de la parte de Problemas:"));
    if (notaProblemas < 0 || notaProblemas > 10) {
      error += 1;
    }

    notaTeorica = Number(prompt("Ingrese la nota de la parte Teórica:"));
    if (notaTeorica < 0 || notaTeorica > 10) {
      error += 1;
    }

    if (error === 0) {
      // Si no hubo errores, es decir si el ingreso de notas fue correcto. se denomina notas a los números entre [0...10]
      notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
      alert("Nota Final: " + notaFinal.toFixed(1));
    } else {
      alert("ERROR!");
    }
    nombreAlumno = prompt(
      'Ingrese el Nombre del Alumno  (Para salir no ingrese nada y presione "aceptar"):'
    );
  }
});
