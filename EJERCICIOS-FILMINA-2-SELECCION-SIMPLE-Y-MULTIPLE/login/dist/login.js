var rotulo1 = document.getElementById("rotulo1");
var username = document.getElementById("datoUser");
var rotulo2 = document.getElementById("rotulo2");
var passwordUser = document.getElementById("datoPassword");
var btnCargar = document.getElementById("btnCargar");
rotulo1.innerHTML = "Nombre de Usuario";
rotulo2.innerHTML = "Contraseña";
var usuarioCargado = "Juan";
var claveCargada = "claveJuan";
btnCargar.addEventListener("click", function () {
    var usuarioIngresado = username.value;
    var claveIngresada = passwordUser.value;
    if ((usuarioIngresado == usuarioCargado) && (claveIngresada == claveCargada)) {
        console.log("Los datos ingresados son CORRECTOS. ¡Sea usted Bienvenido!");
    }
    else {
        console.log("Los datos ingresados son INCORRECTOS. Vuelva a intentarlo.");
    }
});
