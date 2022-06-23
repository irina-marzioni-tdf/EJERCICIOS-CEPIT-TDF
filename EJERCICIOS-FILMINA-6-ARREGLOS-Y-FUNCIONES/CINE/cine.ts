let ListaDeButacas: boolean[];
let cantButacasDesocupadas: number = 0;

function llenarButacasAleatoriamente (): boolean[] {
    let butacas: boolean[] = new Array(50);

    for (let i: number = 0; i < butacas.length; i++){
        butacas[i] = (Math.random()*10) >= 2;
    }
    return butacas;
}

function calcularButacasDesocupadas(butacas: boolean[]): number {
    let cantidad: number= 0;
    for (let i: number = 0; i < butacas.length; i++){
        if (butacas[i] === false) {
            cantidad++;
        }
    }
    return cantidad;
}

ListaDeButacas = llenarButacasAleatoriamente();
cantButacasDesocupadas = calcularButacasDesocupadas(ListaDeButacas);

console.log(`Cantidad de butacas desocupadas = ${cantButacasDesocupadas}`);


/*
function mostrarEstadoButacas(butacas: boolean[]) {
    for (let i: number = 0; i < butacas.length; i++){
        console.log(`Butaca Nro ${i} = ${butacas[i]}`);
    }
}

mostrarEstadoButacas(listaDeButacas);
*/