let cantidad_alumnos: number = Number(prompt("Ingrese la cantidad de infantes:"))
let aula_correspondiente: string= "";

function asignarAula(cant_infantes: number): string{
    let aula_Azul:number = 40;
    let aula_Verde:number = 35;
    let aula_Amarilla:number = 30;
    let aula_asignada:string = "";
    
    if (cant_infantes <= aula_Amarilla ){
        aula_asignada = "Amarrila";
    }
    else {
        if (cant_infantes <= aula_Verde ) {
            aula_asignada = "Verde";
        }
        else {
            if (cant_infantes <= aula_Azul ) {
                aula_asignada = "Azul";
            }
        }
    }

    return aula_asignada;
}


aula_correspondiente = asignarAula(cantidad_alumnos);

if (aula_correspondiente != "") {
    console.log(`Le corresponde el aula ${aula_correspondiente}`);
}
else {
    console.log("No hay aulas que albergen esa cantidad de alumnos.")
}
