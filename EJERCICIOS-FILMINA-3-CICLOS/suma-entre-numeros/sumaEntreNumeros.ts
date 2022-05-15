let btnEjecutar4 = document.getElementById ("btnEjecutar4");

btnEjecutar4.addEventListener ("click", () => {
    let numero1 : number = Number(prompt("Ingrese el Primer número"));
    let numero2 : number = Number(prompt("Ingrese el Segundo número"));
    let sumatoria : number = 0;
    for (let i : number = numero1; i <= numero2; i++) {
        sumatoria += i;
    }
    alert ("La sumatoria de los números entre " + numero1 + " y " + numero2 + " es: " + sumatoria)
});