//Promedio Escolar
let alumno: string = "";
let notasTrimestrales: number[];
let promedioAnual: number = 0;
let notasErroneas:number = 0;


function informarPromedioAnual(alumno:string,promedio:number){
    alert(`El promedio anual de ${alumno} es de ${promedio}`);
}


function calcularPromedioAnualdeNotas(notas:number[]): number {
    let promedio:number = 0;
    let sumatoriaNotas:number = 0;
    for (let i:number = 0; i < notas.length; i++) {
        sumatoriaNotas += notas[i];
    }
    promedio = sumatoriaNotas / notas.length;
    promedio = Number(promedio.toFixed(1));
    
    return promedio;
}


function InformarErrorDeNotasIncorrectas(notas:number[]): number {
    let error:number = 0;
    for (let i:number = 0; i < notas.length; i++) {
        if (notas[i] < 0 || notas[i] > 10) {
            error += 1;
        }
    }
    return error;
}


function cargarNotasTrimestrales (): number[] {
    let notas:number[] = new Array(3);
    for (let i:number = 0; i < notas.length; i++) {
        notas[i] = Number(prompt(`Ingrese la nota del trimestre ${i+1}: `));
    }
    return notas;
}


function pedirNombre ():string {
    let alumno = String(prompt(`Ingrese el nombre del alumno: `));
    return alumno;
}



alert("A continuación ingrese el nombre del alumno y sus 3 notas. Para salir ingrese el número 0");
alumno = pedirNombre();


while (alumno != "0") {
    notasTrimestrales = cargarNotasTrimestrales();
    notasErroneas += InformarErrorDeNotasIncorrectas(notasTrimestrales);
   
    if (notasErroneas === 0) {
        promedioAnual = calcularPromedioAnualdeNotas(notasTrimestrales);
        informarPromedioAnual(alumno,promedioAnual);
    }
    else {
        alert("ERROR! Ingrese una nota correcta entre 0 y 10.");
    }
    alert("A continuación ingrese el nombre del alumno y sus 3 notas. Para salir ingrese el número 0");
    alumno = pedirNombre();
}