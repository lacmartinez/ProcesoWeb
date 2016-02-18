function mensaje(Mensaje) {
    document.getElementById("DialogoMensaje").innerHTML = "";
    document.getElementById("FotterBoton").innerHTML = "";
    var myDiv = document.getElementById("DialogoMensaje");
    var etiqu = document.createElement("Label");
    etiqu.innerHTML = Mensaje;
    myDiv.appendChild(etiqu);
    var myDiv = document.getElementById("FotterBoton");
    var btn = document.createElement("BUTTON");
    btn.className = "btn btn-primary";
    btn.onclick = function () { $('#PopDialogo').modal('hide'); return false; };
    var t = document.createTextNode("Cerrar");
    btn.appendChild(t);
    myDiv.appendChild(btn);
    $('#PopDialogo').modal('show');
}
function DialogoProceso(Mensaje) {
    document.getElementById("DialogoMensaje").innerHTML = "";
    document.getElementById("FotterBoton").innerHTML = "";
    var myDiv = document.getElementById("DialogoMensaje");
    var etiqu = document.createElement("Label");
    etiqu.innerHTML = Mensaje;
    myDiv.appendChild(etiqu);
    var myDiv = document.getElementById("FotterBoton");
    var btn = document.createElement("BUTTON");
    btn.className = "btn btn-primary";
    btn.onclick = function () { EliminaTablas(); return false; };
    var t = document.createTextNode("Si, procesar");       
    btn.appendChild(t);                                
    myDiv.appendChild(btn);
    var btn = document.createElement("BUTTON");        
    btn.className = "btn btn-default";
    btn.onclick = function () { $('#PopDialogo').modal('hide'); return false; };
    var t = document.createTextNode("No");       
    btn.appendChild(t);                                
    myDiv.appendChild(btn);
   $('#PopDialogo').modal('show');

}
function mensajeSin(Mensaje) {
    document.getElementById("DialogoMensaje").innerHTML = "";
    document.getElementById("FotterBoton").innerHTML = "";
    var myDiv = document.getElementById("DialogoMensaje");
    var etiqu = document.createElement("Label");
    etiqu.innerHTML = Mensaje;
    myDiv.appendChild(etiqu);
    $('#PopDialogo').modal('show');
}

