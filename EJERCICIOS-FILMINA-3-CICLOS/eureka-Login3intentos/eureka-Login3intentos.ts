//ejercicio EUREKA: 3 intentos para ingresar la clave correcta.
let btnEjecutar1 = document.getElementById ("btnEjecutar1");
btnEjecutar1.addEventListener ("click", () => {
  let claveRegistrada : string = "eureka";
  let claveIngresada : string = "";
  let contador : number = 0;
  while (contador < 3) {
    claveIngresada = prompt ("Ingrese la clave:");
    if (claveIngresada === claveRegistrada) {
      alert ("Perfecto! La clave ingresada es correcta. ¡Sea usted Bienvenido!");
      contador = 3;
    }
    else {
      contador += 1;
      alert ("Error! La clave ingresada es incorrecta");
      if (contador === 3) {
        alert ("Se agotaron los intentos");
      }
    }
  }
});