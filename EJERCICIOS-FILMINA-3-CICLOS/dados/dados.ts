let btnEjecutar11 = document.getElementById ("btnEjecutar11");
btnEjecutar11.addEventListener ("click", () => {
    let nroDeDados : number = 0;
    let probabilidad : number = 0; 
    let divisor : number = 1;

    nroDeDados = Number(prompt("Ingrese la cantidad de dados a tirar:"));

    for (let i : number = 1; i <= nroDeDados; i++) {
        divisor *= 6;
    }
    probabilidad = 1 / divisor;
    
    alert("La probabilidad de sacar " + nroDeDados + " seis habiendo tirado " + nroDeDados + " dado/s es de: " + probabilidad);
});