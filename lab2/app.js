



var dato1 = document.getElementById("dato1");
var dato2 = document.getElementById("dato2");
var suma = document.getElementById("sumar"); //boton suma EVENTO.CLICK...//
var resultado = document.getElementById("resul");
var result;

suma.addEventListener("click",sumar);

function sumar(){
    resultados =Number(dato1.value)+Number(dato2.value);
    resultado.innerHTML=resultados;
    dato1.value= "";
    dato2.value= "";
    dato1.focus();


} 