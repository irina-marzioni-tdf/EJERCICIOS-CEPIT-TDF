var texto = String(prompt("Ingrese un texto:"));
function convertirTextoEnCamelCase(text) {
    var camelCase = "";
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            camelCase += text[i + 1].toUpperCase();
            i++;
        }
        else {
            camelCase += text[i];
        }
    }
    return camelCase;
}
console.log(texto);
console.log(convertirTextoEnCamelCase(texto));
