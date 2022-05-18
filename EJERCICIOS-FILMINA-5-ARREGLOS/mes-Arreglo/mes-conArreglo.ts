let datoMes = document.getElementById("datoMes");
let btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", () => {
    let numeroMes:number = Number(datoMes.value);

    function imprimirMeses (arrayMes : string[]) {
        console.log("Meses del año y su correspondiente número")
        for (let i : number = 0; i < arrayMes.length; i++) {
            console.log("Mes ", i+1 ," = ",arrayMes[i]);
        }
    }
    function mesesDelAnio (numeroMes : number) {
        let arrayMes : string[] = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ];
        console.log("El número ",numeroMes + 1,"corresponde al mes de",arrayMes[numeroMes]);
        console.log("---------------");
        imprimirMeses(arrayMes);
    }

    mesesDelAnio(numeroMes-1);

//COMO HACER PARA IMPRIMIR TODOS LOS ELEMENTOS DEL ARRAY QUE SE ENCUENTRA DENTRO DE LA FUNCION?
/* esto es otro comentario mas largo dde mas de dos lineas
*/
});