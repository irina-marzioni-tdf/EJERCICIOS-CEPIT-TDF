let texto: string = String(prompt("Ingrese un texto:"));

function convertirTextoEnCamelCase (text: string): string {
  let camelCase: string = "";
  text = text.toLowerCase();
  for (let i: number = 0; i < text.length; i++) {
    if (text[i] == ' ') {
      camelCase += text[i+1].toUpperCase();
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