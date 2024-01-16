
//-------------------------------------------------- Imprimir Div --------------------------------------------------
function imprimirElemento(elemento) {
  var ventana = window.open('()','PRINT', 'height=400,width=600');
  ventana.document.write('<link rel="stylesheet" href="style.css">'); //Aquí agregué la hoja de estilos
  ventana.document.write('<body>');
  ventana.document.write('<center>' + elemento.innerHTML + '</center>');
  ventana.document.write('</body>');
  ventana.document.close();
  ventana.focus();
  ventana.onload = function() {
    ventana.print();
    ventana.close();
  };
  return true;
}

document.querySelector("#btnImprimirDiv").addEventListener("click", function() {
  var div = document.querySelector("#imprimible");
  imprimirElemento(div);
});


//-------------------------------------------------- borar datos del div --------------------------------------------------

function aliminarHijos() {
  var padre = document.getElementById("padre");
  for (var i = 0; i < padre.children.length; i++) {
    var hijo = padre.children[i]
    padre.remove(hijo)
  }
}


//-------------------------------------------------- ocultar y mostrar datos --------------------------------------------------

var clic = 1;

function divLogin(){ 

   if(clic==1){
    document.getElementById("caja").style.display = "block";
   

   clic = clic + 1;

   } else{
   
    document.getElementById('caja').style.display = 'none';

    clic = 1;

   }   

}