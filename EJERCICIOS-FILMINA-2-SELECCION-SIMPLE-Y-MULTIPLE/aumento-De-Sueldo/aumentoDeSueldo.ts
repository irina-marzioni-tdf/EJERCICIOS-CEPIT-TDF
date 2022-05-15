let datoSueldo = document.getElementById("datoSueldo");
let rotulo = document.getElementById("rotulo");
let btnIngresar = document.getElementById("btnIngresar");

rotulo.innerHTML = "Ingrese el salario actual del empleado";

btnIngresar.addEventListener("click", () => {
    let sueldoActual : number = Number(datoSueldo.value);

    if ((sueldoActual > 0) && (sueldoActual<=15000)) {
        console.log("Hay aumento de sueldo");
        console.log("   Sueldo actual: ",sueldoActual);
        console.log("   Aumento: 20%");
        console.log("   Nuevo Sueldo actual: ",sueldoActual + sueldoActual*0.20);
    }
    else {
        if ((sueldoActual > 15000) && (sueldoActual<=20000)) {
            console.log("Hay aumento de sueldo");
            console.log("   Sueldo actual: ",sueldoActual);
            console.log("   Aumento: 10%");
            console.log("   Nuevo Sueldo actual: ",sueldoActual + sueldoActual*0.10);
        }
        if ((sueldoActual > 20000) && (sueldoActual<=25000)) {
            console.log("Hay aumento de sueldo");
            console.log("   Sueldo actual: ",sueldoActual);
            console.log("   Aumento: 5%");
            console.log("   Nuevo Sueldo actual: ",sueldoActual + sueldoActual*0.5);
        }
        if (sueldoActual > 25000){
            console.log("NO hay aumento de sueldo");
        }
    }
});