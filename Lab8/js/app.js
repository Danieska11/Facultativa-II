
var datos =[];
var Formulario = document.getElementById('Formulario')
var Tabla =document.getElementById(table)

Formulario.addEventListener('subtime',agregar);
function agregar(e){
    e.preventDefault();
    console.log ('Dato enviado')
     datos.push((
        Nombres:e.target.Nombres.value,
        Apellidos:e.target.Apwllidos.value,
        Correo:e.target.Correo.value,
        Celular:e.target.Celular.value

     ));
    console.log(datos);
     
 
     visualizar ();
}

    
    function visualizar(){
        var t='';
         for (var index =0; index < datos.lengrh; index)
            {
        t+= <tr>
        <td>$(datos[index].Nombres)</td>
        <td>$(datos[index].Apellidos)</td>
        <td>$(datos[index].Correo)</td>
        <td>$(datos[index].Celular)</td>
        </tr>;

            }
    tabla.innerHTML = t;
           
    }

