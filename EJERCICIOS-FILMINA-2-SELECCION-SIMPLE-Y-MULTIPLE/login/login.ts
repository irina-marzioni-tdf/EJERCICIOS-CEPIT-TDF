let rotulo1 = document.getElementById("rotulo1");
let username = document.getElementById("datoUser");
let rotulo2 = document.getElementById("rotulo2");
let passwordUser = document.getElementById("datoPassword");
let btnCargar = document.getElementById("btnCargar");

rotulo1.innerHTML = "Nombre de Usuario";
rotulo2.innerHTML = "Contraseña";

let usuarioCargado :string= "Juan";
let claveCargada :string= "claveJuan";
btnCargar.addEventListener("click", () => {
    let usuarioIngresado : string = username.value;
    let claveIngresada : string = passwordUser.value;

    if ((usuarioIngresado == usuarioCargado) && (claveIngresada == claveCargada)){
        console.log ("Los datos ingresados son CORRECTOS. ¡Sea usted Bienvenido!");
    } else {
        console.log("Los datos ingresados son INCORRECTOS. Vuelva a intentarlo.");
    }
});
