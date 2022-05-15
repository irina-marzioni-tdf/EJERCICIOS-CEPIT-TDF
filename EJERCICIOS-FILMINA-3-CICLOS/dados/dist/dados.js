var btnEjecutar11 = document.getElementById("btnEjecutar11");
btnEjecutar11.addEventListener("click", function () {
    var nroDeDados = 0;
    var probabilidad = 0;
    var divisor = 1;
    nroDeDados = Number(prompt("Ingrese la cantidad de dados a tirar:"));
    for (var i = 1; i <= nroDeDados; i++) {
        divisor *= 6;
    }
    probabilidad = 1 / divisor;
    alert("La probabilidad de sacar " + nroDeDados + " seis habiendo tirado " + nroDeDados + " dado/s es de: " + probabilidad);
});
