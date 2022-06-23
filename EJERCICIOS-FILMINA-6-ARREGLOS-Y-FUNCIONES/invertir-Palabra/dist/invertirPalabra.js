//INVERTIR STRING
var palabra = String(prompt("Ingrese una palabra: "));
var palabraInvertida;
function invertirTexto(texto) {
    var textoInvertido = "";
    for (var i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}
palabraInvertida = invertirTexto(palabra);
console.log("Palabra ingresada: " + palabra);
console.log("Palabra invertida: " + palabraInvertida);
