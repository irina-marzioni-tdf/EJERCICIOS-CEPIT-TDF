//Vendiendo Pasajes
var cantAsientos = 20;
var col_butacas1 = new Array(cantAsientos);
var col_butacas2 = new Array(cantAsientos);
var col_butacas3 = new Array(cantAsientos);
var columna = "";
var quiereComprar = 0;
function iniciarAsientos(columnaDeAsientos) {
    for (var i = 0; i < columnaDeAsientos.length; i++) {
        columnaDeAsientos[i] = 0;
    }
}
function mostrarEstadoAsientos(columnaDeAsientos) {
    var estado_asiento = "";
    for (var i = 0; i < columnaDeAsientos.length; i++) {
        if (columnaDeAsientos[i] == 0) {
            estado_asiento = "Libre";
        }
        else {
            estado_asiento = "Ocupado";
        }
        console.log("   Asiento " + i + " = " + estado_asiento);
    }
}
function asignarAsiento(columnaDeAsientos) {
    var nroAsiento = Number(prompt("Ingrese el número de asiento: (entre 0 y 19)"));
    columnaDeAsientos[nroAsiento] = 1;
}
iniciarAsientos(col_butacas1);
iniciarAsientos(col_butacas2);
iniciarAsientos(col_butacas3);
quiereComprar = Number(prompt("¿Desea comprar un pasaje? Para comprar ingrese 1 y para salir ingrese cualquier otro numero"));
while (quiereComprar == 1) {
    console.log("Asientos de la columna A:");
    mostrarEstadoAsientos(col_butacas1);
    console.log("Asientos de la columna B:");
    mostrarEstadoAsientos(col_butacas2);
    console.log("Asientos de la columna C:");
    mostrarEstadoAsientos(col_butacas3);
    columna = String(prompt("Ingrese la columna a elegir (A, B, C):"));
    switch (columna) {
        case "A":
            asignarAsiento(col_butacas1);
            break;
        case "B":
            asignarAsiento(col_butacas2);
            break;
        case "C":
            asignarAsiento(col_butacas3);
            break;
        default:
            alert("ERROR! Ingrese una letra de columna corecta (A, B, C)");
            break;
    }
    quiereComprar = Number(prompt("¿Desea comprar un pasaje? Para comprar ingrese 1 y para salir ingrese cualquier otro numero"));
}
