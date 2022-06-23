//INVERTIR STRING
let palabra:string = String(prompt("Ingrese una palabra: "));
let palabraInvertida:string;

    function invertirTexto(texto: string): string {
        let textoInvertido:string = "";
        for (let i:number = texto.length-1; i >=0 ; i--) {
            textoInvertido += texto[i];
        }
        return textoInvertido;
    }

palabraInvertida = invertirTexto(palabra);
console.log(`Palabra ingresada: ${palabra}`);
console.log(`Palabra invertida: ${palabraInvertida}`);
