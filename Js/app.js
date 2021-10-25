


/*
function showmenu() {
  if (document.getElementsByClassName("botonPelota").style.display=="block")
  {
    document.getElementById("links").classList.toggle("elementos");
    alert( document.getElementById("pelota").style.display)
  }
  }
*/


function showmenu() {

    document.getElementById("links").classList.toggle("elementos");
  }



  var form = document.getElementById("formulario");
  form.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    var msgError=[];
    var apellido = document.getElementById("Apellido")
    var nombre = document.getElementById("Nombre")
    var email = document.getElementById("Email")
    var telefono = document.getElementById("Telefono")

    var error = document.getElementById("error");
    error.style.color='red'
    
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    
    if (apellido.value===null || apellido.value===''){msgError.push('debe ingresar un Apellido')}
    if (nombre.value===null || nombre.value===''){msgError.push('debe ingresar un Nombre')}
    if (email.value===null || email.value==='' || regex.test(email.value)===false ) {msgError.push('debe ingresar un email valido')}
    if (telefono.value===null || telefono.value===''){msgError.push('debe ingresar un telefono valido')}

    error.innerHTML = msgError.join(',');

/*
    function validar_email( email ) 
    {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) ? true : false;

        var email_prueba = "fulanito@gmail.com";
 
if( validar_email( email_prueba ) )
{
    alert("El email es correcto");
}
else
{
    alert("El email NO es correcto");
}
    }
*/


  })

/*
   addEventListener('DOMContentLoaded',() => {
 var btn_menu = document.querySelector('.botonPelota')
     if(btn_menu) {
 btn_menu.addEventListener('click', () => {
         const elementos = document.querySelector('.elementos')
     })

    }

   })

   */