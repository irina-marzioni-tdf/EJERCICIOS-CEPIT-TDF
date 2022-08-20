let sumaTotal=0;
let botonAgregar=document.querySelector(".btnAgregar");
let botonTotal=document.querySelector(".btnTotal");

botonAgregar.addEventListener("click",agregarProducto);
botonTotal.addEventListener("click",calcularTotal);

function agregarProducto() {
    let producto= document.querySelector(".product").value;
    let cantidad= document.querySelector(".cant").value;
    let costo= document.querySelector(".cost").value;
    let subTotal=(costo*cantidad);
    let elementProd=document.createElement("li"); elementProd.innerHTML= producto;
    let elementCant=document.createElement("li"); elementCant.innerHTML=cantidad;
    let elementCost=document.createElement("li"); elementCost.innerHTML=`$` +costo;
    let elementSubTotal=document.createElement("li"); elementSubTotal.innerHTML=`$` +subTotal;
    let listProd = document.querySelector("#listProd");
    let listCant = document.querySelector("#listCant");
    let listCost = document.querySelector("#listCost");
    let listSubTotal = document.querySelector("#listSubTotal");
    listProd.appendChild(elementProd);
    listCant.appendChild(elementCant);
    listCost.appendChild(elementCost);
    listSubTotal.appendChild(elementSubTotal);
    sumaTotal= sumaTotal+subTotal;
    }

function calcularTotal() {
    document.querySelector(".total").innerHTML=`El costo total de la compra es: $ `+ sumaTotal;
}