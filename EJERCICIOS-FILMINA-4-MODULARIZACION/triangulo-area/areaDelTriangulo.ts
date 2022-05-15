let datoBase = document.getElementById("datoBase");
let datoAltura = document.getElementById("datoAltura");
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => {
    let base : number = Number(datoBase.value);
    let altura : number = Number(datoAltura.value);
    
    function calcularAreaTriangulo (base:number, altura:number) : number {
    return (base * altura) / 2;
    }

    console.log("El área del triángulo es: ", calcularAreaTriangulo(base,altura));
    
});