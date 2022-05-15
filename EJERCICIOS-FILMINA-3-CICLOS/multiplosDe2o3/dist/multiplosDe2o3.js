// ejercicio múltiplos: informar multiplos de 2 ó 3 (hacerlo una sola vez si hay múltiplos de ambos al mismo tiempo)
var btnEjecutar2 = document.getElementById("btnEjecutar2");
btnEjecutar2.addEventListener("click", function () {
    console.log("MÚLTIPLOS DE 2 ó 3");
    for (var i = 1; i <= 100; i++) {
        if ((i % 2 === 0) && (i % 3 === 0)) {
            console.log(" El número " + i + " es múltiplo de " + 2 + " y de " + 3);
        }
        else {
            if (i % 2 === 0) {
                console.log(" El número " + i + " es múltiplo de " + 2);
            }
            else {
                if (i % 3 === 0) {
                    console.log(" El número " + i + " es múltiplo de " + 3);
                }
            }
        }
    }
    alert("Diríjase a la consola para ver los resultados");
});
