let rotulo = document.getElementById("rotulo");
let datoAltura = document.getElementById("datoAltura");
let btnIngreso = document.getElementById("btnIngreso");

rotulo.innerHTML = "Ingrese su altura en metros"

btnIngreso.addEventListener("click", () => {
    let alturaMts : number = Number(datoAltura.value);
    if (alturaMts < 1.30) {
        console.log("NO puede subirse a la montaña rusa");
        console.log("   Altura de la persona: ",datoAltura.value,"mts");
        console.log("   Ingreso restringido a alturas menores a 1.30 mts ");
    } else {
        console.log("SI puede subirse a la montaña rusa");
        console.log("   Altura de la persona: ",datoAltura.value,"mts");
    }
})