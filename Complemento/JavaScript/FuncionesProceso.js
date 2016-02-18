function ActualizaIdMovNomina() {
    var Update = "";
    if (IdsMovimientosMN.length > 0) {
        for (var j = 0; j < IdsMovimientosMN.length; j++) {
            if (j < IdsMovimientosMN.length - 1)
                Update = Update + IdsMovimientosMN[j][1] + "||"+IdsMovimientosMN[j][2] + "}@{";
            else
                Update = Update + IdsMovimientosMN[j][1] + "||"+IdsMovimientosMN[j][2];

        }
        //alert(Update);
        var Params = "{ BaseCliente: '" + BaseCliente + "',  Update: '" + Update + "'}";
        $.ajax({
            async: false,
            type: "POST",
            url: "../Proceso.aspx/UpdateIdsMN",
            contentType: "application/json;charset=utf-8",
            data: Params,
            dataType: "json",
            success: function (result) {
                //alert(result.d);
                //SetEstructura(result);
                console.log(result.d)
            }
        });
    }
}




function InsertMovimientosT() {
    var Update = "";
    if (MovimientosTabla.length > 0) {
        for (var j = 0; j < MovimientosTabla.length; j++) {
            if (j < MovimientosTabla.length - 1)
                Update = Update + MovimientosTabla[j] + "}@{";
            else
                Update = Update + MovimientosTabla[j];

        }
        //alert(Update);
        var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', Update: '" + Update + "'}";
        $.ajax({
            async: false,
            type: "POST",
            url: "../Proceso.aspx/InsertMovTabla",
            contentType: "application/json;charset=utf-8",
            data: Params,
            dataType: "json",
            success: function (result) {
                //alert(result.d);
                //SetEstructura(result);
                console.log(result.d)
            }
        });
    }
}



function InsertMovimientosN() {
    var Update = "";
    var h = 0;
    var d = 0;
    var i = 0;
    var IdMN = 0;
    var TablaMN = "";
    var ClaveEmpleado = "";
    var IdConcepto = "";
    var FechaFin = "";
    var IdEjecucion = 0;
    MNInsertar = new Array();
    //alert("Detenido");
    for (var j = 0; j < AuxIdsConcepto.length; j++) {
        h = 0;
        d = 0;
        i = 0;
        IdMN = 0;
        for (k = 0; k < ConceptosTodos.length; k++) {
            if (AuxIdsConcepto[j] == ConceptosTodos[k][0]) {
                if (ConceptosTodos[k][1] == 1) {
                    for (var l = 0; l < MovimientosNomina.length; l++) {

                        if (AuxIdsConcepto[j] == MovimientosNomina[l][2]) {
                            h = h + parseFloat(MovimientosNomina[l][5]);
                            d = d + parseFloat(MovimientosNomina[l][6]);
                            i = i + parseFloat(MovimientosNomina[l][7]);
                            if (IdMN == 0) {
                                TablaMN = MovimientosNomina[l][0];
                                IdMN = ObtieneIdMN(MovimientosNomina[l][0]);
                                ClaveEmpleado = MovimientosNomina[l][1];
                                IdConcepto = MovimientosNomina[l][2];
                                FechaFin = MovimientosNomina[l][3];
                                IdEjecucion = MovimientosNomina[l][4];
                            }
                        }



                    }
                    MNInsertar.push(TablaMN + "||" + IdMN + "||" + ClaveEmpleado + "||" + IdConcepto + "||" + FechaFin + "||" + IdEjecucion + "||" + h + "||" + d + "||" + i + "||2");


                } else {
                    for (var l = 0; l < MovimientosNomina.length; l++) {
                        if (AuxIdsConcepto[j] == MovimientosNomina[l][2]) {
                            h = parseFloat(MovimientosNomina[l][5]);
                            d = parseFloat(MovimientosNomina[l][6]);
                            i = parseFloat(MovimientosNomina[l][7]);
                            TablaMN = MovimientosNomina[l][0];
                            IdMN = ObtieneIdMN(MovimientosNomina[l][0]);
                            ClaveEmpleado = MovimientosNomina[l][1];
                            IdConcepto = MovimientosNomina[l][2];
                            FechaFin = MovimientosNomina[l][3];
                            IdEjecucion = MovimientosNomina[l][4];
                            MNInsertar.push(TablaMN + "||" + IdMN + "||" + ClaveEmpleado + "||" + IdConcepto + "||" + FechaFin + "||" + IdEjecucion + "||" + h + "||" + d + "||" + i + "||2");
                        }
                    }
                }


            }
        }
    }
    for (var h = 0; h < MNInsertar.length; h++) {
        if (h < MNInsertar.length - 1)
            Update = Update + MNInsertar[h] + "}@{";
    else
            Update = Update + MNInsertar[h];
    }
    console.log(Update);
    if (Update.trim() != "") {
        var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', Update: '" + Update + "'}";
        $.ajax({
            async: false,
            type: "POST",
            url: "../Proceso.aspx/InsertMovimientos",
            contentType: "application/json;charset=utf-8",
            data: Params,
            dataType: "json",
            success: function (result) {
                //alert(result.d);
                //SetEstructura(result);
                console.log(result.d)
            }
        });
    }
   
}



function ActualizaAcumulado() {
    var Update = "";
    for (var j = 0; j < AcumuladoEmpleado.length; j++) {
        if (j < AcumuladoEmpleado.length-1 )
            Update = Update + AcumuladoEmpleado[j][0] + "||" + AcumuladoEmpleado[j][1] + "||" + AcumuladoEmpleado[j][2] + "||" + AcumuladoEmpleado[j][3] +  "||" + AcumuladoEmpleado[j][4] + "||" + AcumuladoEmpleado[j][5] + "}@{";
        else
            Update = Update + AcumuladoEmpleado[j][0] + "||" + AcumuladoEmpleado[j][1] + "||" + AcumuladoEmpleado[j][2] + "||" + AcumuladoEmpleado[j][3] +  "||" + AcumuladoEmpleado[j][4] + "||" + AcumuladoEmpleado[j][5] + "";

    }
    //alert(Update);
    var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', Update: '" + Update + "'}";
    $.ajax({
        async: false,
        type: "POST",
        url: "../Proceso.aspx/UpdateAcumuladosEmpleado",
        contentType: "application/json;charset=utf-8",
        data: Params,
        dataType: "json",
        success: function (result) {
            //alert(result.d);
            //SetEstructura(result);
            console.log(result.d)
        }
    });
}





function ActualizaPersonal(NCampo, Valor) {
    //alert("Entro");
    var Update = NCampo + "::" + Valor + "||";
    for (var j = 0; j < EstructuraPersonal.length; j++) {
        if (Personal[EstructuraPersonal[j]] instanceof Date) {
            console.log(EstructuraPersonal[j]);
            if (Personal[EstructuraPersonal[j]].toString() != "Invalid Date") {
                Update = Update + EstructuraPersonal[j] + "::" + Personal[EstructuraPersonal[j]].toISOString().substr(0, 10).replace("-", "").replace("-", "");
            } else {
                Update = Update + EstructuraPersonal[j] + "::";
            }
            
        } else {
            Update = Update + EstructuraPersonal[j] + "::" + Personal[EstructuraPersonal[j]];
        }
        if (j < EstructuraPersonal.length - 1) {
            Update = Update + "||";
        }
    }
    //alert(Update);
    var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', NombreEstructura: 'Personal', Update: '" + Update + "'}";
    $.ajax({
        async: false,
        type: "POST",
        url: "../Proceso.aspx/UpdateParaCada",
        contentType: "application/json;charset=utf-8",
        data: Params,
        dataType: "json",
        success: function (result) {
            //alert(result.d);
            //SetEstructura(result);
            console.log(result.d)
        }
    });


}




function ActualizaPosicion(NCampo, Valor) {
    //alert("Entro");
            var Update = NCampo+"::"+Valor+"||";
            for (var j = 0; j < EstructuraPosicion.length; j++) {
                if (Posicion[EstructuraPosicion[j]] instanceof Date) {
                    Posicion[EstructuraPosicion[j]]
                    Update = Update + EstructuraPosicion[j] + "::" + Posicion[EstructuraPosicion[j]].toISOString().substr(0, 10).replace("-", "").replace("-", "");
                } else {
                    Update = Update + EstructuraPosicion[j] + "::" + Posicion[EstructuraPosicion[j]];
                }
                if (j < EstructuraPosicion.length - 1) {
                    Update = Update + "||";
                }
            }
            //alert(Update);
            var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', NombreEstructura: 'Posicion', Update: '" + Update + "'}";
            $.ajax({
                async: false,
                type: "POST",
                url: "../Proceso.aspx/UpdateParaCada",
                contentType: "application/json;charset=utf-8",
                data: Params,
                dataType: "json",
                success: function (result) {
                    //alert(result.d);
                    //SetEstructura(result);
                    console.log(result.d)
                }
            });
    

}




function ActualizaBase() {
    //alert("Entro");
    var Update = "";
    if (ArrayAuxiliar.length != 0 && EstructuraTabla.length != 0) {
        //alert("Entro");
        for (var i = 0; i < ArrayAuxiliar.length; i++) {
            //alert("Entro");
            for (var j = 0; j < EstructuraTabla.length; j++) {
                if (ArrayAuxiliar[i][EstructuraTabla[j]] instanceof Date) {
                    ArrayAuxiliar[i][EstructuraTabla[j]]
                    Update = Update + EstructuraTabla[j] + "::" + ArrayAuxiliar[i][EstructuraTabla[j]].toISOString().substr(0, 10).replace("-", "").replace("-", "");
                } else {
                    Update = Update + EstructuraTabla[j] + "::" + ArrayAuxiliar[i][EstructuraTabla[j]];
                }
                if (j < EstructuraTabla.length - 1) {
                    Update = Update + "||";
                }
            }
            if (i < ArrayAuxiliar.length-1)
                Update = Update + "}@{";
        }
        var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', NombreEstructura: '" + NombreEstructura + "', Update: '" + Update + "'}";
        $.ajax({
            async: false,
            type: "POST",
            url: "../Proceso.aspx/UpdateParaCada",
            contentType: "application/json;charset=utf-8",
            data: Params,
            dataType: "json",
            success: function (result) {
                //alert(result.d);
                //SetEstructura(result);
                console.log(result.d)
            }
        });
    }
    
}

function GenerarArrayTabla(Estructura, Condicion) {
    if (typeof (Condicion) == "undefined") {
        Condicion = "";
    }
    NombreEstructura = Estructura;
      ArrayAuxiliar = [];
    //EstructuraTabla = new Array();
    var Params = "{ BaseCliente: '" + BaseCliente + "', PrefijTable: '" + PrefijTable + "', Estructura: '" + Estructura + "', Condicion: " + JSON.stringify(Condicion) + "}";
    $.ajax({
        async: false,
        type: "POST",
        url: "../Proceso.aspx/GenerarArrayTabla",
        contentType: "application/json;charset=utf-8",
        data: Params,
        dataType: "json",
        success: function (result) {
            //alert(result.d);
            SetEstructura(result);
        }
    });
    function SetEstructura(result) {
        var Datos = new Array();
        var Dato = new Array();
        var SubDato = new Array();
        Datos = result.d.split("}@{");
        if (Datos[0].trim() != "") {
            for (var j = 0; j < Datos.length; j++) {
                Dato = Datos[j].split('||');
                ArrayAuxiliar[j] = {};
                EstructuraTabla = [];
                //console.log(Dato);
                for (var i = 0; i < Dato.length; i++) {
                    SubDato = Dato[i].split("->");
                    if (SubDato[1].search("a. m.") != -1 || SubDato[1].search("p. m.") != -1) {
                        ArrayAuxiliar[j][SubDato[0].trim()] = StringToFecha(SubDato[1].trim());
                    } else {
                        ArrayAuxiliar[j][SubDato[0].trim()] = SubDato[1].trim();
                    }
                    EstructuraTabla[i] = SubDato[0].trim();
                    //ArrayAuxiliar[j][SubDato[0]] = SubDato[1].trim();
                }
            }
            //alert("Entro y ubo datos: " + Estructura + ". Campor--> Id" + Estructura);
        }
        //alert(ArrayAuxiliar);
    }

}
function DifDias(f1, f2) {
    f1 = new Date(f1);
    f2 = new Date(f2);
    if (f1.toString().trim() != "Invalid Date" && f2.toString().trim() != "Invalid Date") {
        //console.log(f1 + "-" + f2);
        //console.log(f1.getFullYear() + " / " + f1.getMonth() + " / " + f1.getDate());
        //console.log(f2.getFullYear() + " / " + f2.getMonth() + " / " + f2.getDate());
        var fFecha1 = Date.UTC(f1.getFullYear(), f1.getMonth(), f1.getDate());
        var fFecha2 = Date.UTC(f2.getFullYear(), f2.getMonth(), f2.getDate());
        var dif = fFecha1 - fFecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias + 1;
    } else {
        return 0;
    }
   
}
function DifAnios(f1, f2) {
    f1 = new Date(f1);
    f2 = new Date(f2);
    //console.log(f1 + "-" + f2);
    //console.log(f1.getFullYear() + " / " + f1.getMonth() + " / " + f1.getDate());
    //console.log(f2.getFullYear() + " / " + f2.getMonth() + " / " + f2.getDate());
    var fFecha1 = Date.UTC(f1.getFullYear(), f1.getMonth(), f1.getDate());
    var fFecha2 = Date.UTC(f2.getFullYear(), f2.getMonth(), f2.getDate());
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    var anios = ParteEntera(dias / 365);
    return anios;


}
function ProxDomingo(f1) {
    console.log(f1);
    if (f1.toString().trim() != "" && f1.toString().trim() != "NaN") {
        var f1 = new Date(f1);
        var f2;
        for (nf = 1; nf <= 7; nf++) {
            f2 = new Date(f1.getTime() + ((nf) * 24 * 3600 * 1000));
            if (f2.getDay() == 0) {
                break;
            }
        }
    } else {
        f2 = "";
    }

    return f2;
}



function Redondeo(value, places) {
    value = parseFloat(value);
    var Valor = 0;
    var medio = parseFloat(truncateDecimals(value, 2) + 0.005);
    //console.log(value+":"+medio)
    if (value > medio) {
        Valor = value.toFixed(places);
    } else {
        
        Valor = truncateDecimals(value,places);
    }
    //console.log(parseFloat(Valor.toString()));
    return parseFloat(Valor.toString());
}
    function truncateDecimals(num, digits) {
        var numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

        return parseFloat(finalResult);
    }

    function ParteEntera(numero) {
        numero = numero + " ";
        var entero = numero.split(".");
        entero = parseInt(entero[0]);
        return entero;
    }
    function Anio(Fecha) {
        Fecha = new Date(Fecha);
        return Fecha.getFullYear();
    }
    function Mes(Fecha) {
        Fecha = new Date(Fecha);
        Fecha = parseInt(Fecha.getMonth()) + 1;
        return Fecha;
    }
    function DiaMes(Fecha) {
        Fecha = new Date(Fecha);
        return Fecha.getDate();
    }
    function Dia(Fecha) {
        Fecha = new Date(Fecha);
        return Fecha.getDate();
    }
    function DiaSemana(Fecha) {
        
        if (Fecha.toString().trim() != "" && Fecha.toString().trim() != "NaN") {

            Fecha = new Date(Fecha);
            console.log("Dia:" + Fecha.getDay());

            return parseInt(Fecha.getDay()+1);
        } else {
            return 0;

        }
    }
    function ConstrtuyeFecha(DIA, MES, AÑO) {
        MES = MES - 1;
        var Fecha = new Date(AÑO, MES, DIA);
        return Fecha;
    }
    function Menor(val1, val2) {
        if (val1.toString().trim() != "" )
            val1 = parseFloat(val1);
        else
            val1 = 0;
        if (val2.toString().trim() != "")
            val2 = parseFloat(val2);
        else
            val2 = 0;
        if (val1 < val2) {
            return val1;
        } else {
            return val2;
        }
    }
    function Mayor(val1, val2) {
        val1 = parseFloat(val1);
        val2 = parseFloat(val2);
        if (val1 > val2) {
            return val1;
        } else {
            return val2;
        }
    }
    function FechaANumero(Fecha) {
        if (Fecha.toString().trim() != 0) {
            var f1 = new Date('1900/01/01');
            var now = Number(DifDias(Fecha, f1) - 1);
            //console.log(Fecha + "|" + now);
            return now;
        } else {
            return 0;
        }
    }
    function NumeroAFecha(Numero) {
        var f1 = new Date('1900/01/01');
        Numero = Numero - 2;
        //console.log(Numero + "|" + new Date(f1.getTime()));
        //console.log(Numero + "|" + new Date(f1.getTime() + (Numero * 24 * 60 * 60 * 1000)));
        return new Date(f1.getTime() + (Numero * 24 * 60 * 60 * 1000));
    }
    function gmt(valores) {
        //alert("Entro");
        var fecha = "";
        var Datos = new Array();
        var NewAddMT = MovTabla;
        Datos = valores.split("||");
   
        for (var j = 0; j < Datos.length; j++) {
            if (Datos[j].indexOf("GMT-") == -1) {
                NewAddMT += "||"+Datos[j];
            } else {
                fecha = new Date(Datos[j]);
                fecha = fecha.toISOString().substr(0, 10).replace("-", "").replace("-", "");
                NewAddMT += "||" + fecha;
            }
        }
        NewAddMT += "||2";
        MovimientosTabla.push(NewAddMT);
    
    }
    function IniAcumulado(Acumulado) {
        Acumulado = parseInt(Acumulado);
        for (var i = 0; i < AcumuladoEmpleado.length; i++) {
            if (parseInt(AcumuladoEmpleado[i][0]) == Acumulado) {
                AcumuladoEmpleado[i][1] = 0;
                AcumuladoEmpleado[i][2] = 0;
                AcumuladoEmpleado[i][3] = 0;
            }

        }
    }
    function ParteEntera(numero) {
        numero = numero + " ";
        var entero = numero.split(".");
        entero = parseInt(entero[0]);
        return entero;
    }
    function ParteFraccionaria(numero) {
        numero = numero + " ";
        var entero = numero.split(".");
        entero = parseInt(entero[1]);
        return entero;
    }
    function gmn(Importe, Dias, Horas) {
        if (typeof (Importe) == "undefined") {
            Importe = 0;
        }
        if (typeof (Dias) == "undefined") {
            Dias = 0;
        }
        if (typeof (Horas) == "undefined") {
            Horas = 0;
        }
        var TablaMN = "";
        var IdMN = 0;
        if (Tipo == 1) {
            TablaMN = "MNPercepciones";

        }
        if (Tipo == 2) {
            TablaMN = "MNDeducciones";

        }
        if (Tipo == 3) {
            TablaMN = "MNNetos";

        }
        if (Tipo == 4) {
            TablaMN = "MNAuxiliares";

        }
        //IdMN = ObtieneIdMN(TablaMN);
        //MovimientosNomina.push(TablaMN + "||" + IdMN + "||" + ClaveDelEmpleadoMN + "||" + IdConcepto + "||" + Ejecucion.FechaFin.toISOString().substr(0, 10).replace("-", "").replace("-", "") + "||" + IdEjecucion + "||" + Horas + "||" + Dias + "||" + Importe + "||2");
        MovimientosNomina.push([TablaMN, ClaveDelEmpleadoMN, parseInt(IdConcepto), Ejecucion.FechaFin.toISOString().substr(0, 10).replace("-", "").replace("-", ""), IdEjecucion, Horas, Dias, Importe]);
        if (AuxIdsConcepto.indexOf(parseInt(IdConcepto)) == -1) {
            AuxIdsConcepto.push(parseInt(IdConcepto));
        }
        console.log("Movimiento:"+TablaMN + "||" + IdMN + "||" + ClaveDelEmpleadoMN + "||" + IdConcepto + "||" + Ejecucion.FechaFin.toISOString().substr(0, 10).replace("-", "").replace("-", "") + "||" + IdEjecucion + "||" + Horas + "||" + Dias + "||" + Importe + "||2");
        ModAcumulado(IdConcepto, Tipo, Importe, Dias, Horas);
    }
    function ObtieneIdMN(TablaMN) {
        var IdMN = 0;
        for (var r = 0; r < IdsMovimientosMN.length; r++) {
            if (IdsMovimientosMN[r][0] == "av_" + TablaMN) {
                IdsMovimientosMN[r][2] = IdsMovimientosMN[r][2] + 1;
                IdMN = IdsMovimientosMN[r][2];
            }
        }
        return IdMN;

    }

    function ModAcumulado(IdConcepto, Tipo, Importe, Dias, Horas) {
        console.log("Entra Acu:"+CAcumulado(72, "Importe"));
        Importe = parseFloat(Importe);
        Dias = parseFloat(Dias);
        Horas = parseFloat(Horas);
        for (var i = 0; i < VarRelAC.length; i++) {
            var IdRelConcepto = VarRelAC[i][0];
            var IdRelAcumulado = VarRelAC[i][1];
            if (IdConcepto == IdRelConcepto) {
                //console.log("Concepto " + IdConcepto + "-->" + VarRelAC[i][0]);
                for (var n = 0; n < AcumuladoEmpleado.length; n++) {
                    var IdAcumuladoActualizar = AcumuladoEmpleado[n][0];
                    var Aplicador = parseInt(AcumuladoEmpleado[n][7]);
                    //console.log("--> " + IdRelAcumulado + "-->" + IdAcumuladoActualizar);
                    if (IdRelAcumulado == IdAcumuladoActualizar) {
                        AcumuladoEmpleado[n][3] = parseFloat(AcumuladoEmpleado[n][3]).toFixed(6);
                        console.log("Acuid ap:" + Aplicador + ", Tipo: " + Tipo + "  -> " + IdAcumuladoActualizar + ": " + AcumuladoEmpleado[n][3] + "-" + Importe);
                        if (Aplicador == 1) {
                           
                            if (Tipo == 1) {
                                AcumuladoEmpleado[n][1] = parseFloat(AcumuladoEmpleado[n][1]) + Horas;
                                //console.log(AcumuladoEmpleado[n][1] + "=" + AcumuladoEmpleado[n][1]+" + "+Horas);
                                AcumuladoEmpleado[n][2] = parseFloat(AcumuladoEmpleado[n][2]) + Dias;
                                //console.log(AcumuladoEmpleado[n][2] + "=" + AcumuladoEmpleado[n][2] + " + " + Dias);
                                AcumuladoEmpleado[n][3] = parseFloat(AcumuladoEmpleado[n][3]) + Importe;
                                //console.log(AcumuladoEmpleado[n][3] + "=" + AcumuladoEmpleado[n][3] + " + " + Importe);
                            }
                            if (Tipo == 2) {
                                AcumuladoEmpleado[n][1] = parseFloat(AcumuladoEmpleado[n][1]) - Horas;
                                //console.log(AcumuladoEmpleado[n][1] + "=" + AcumuladoEmpleado[n][1] + " - " + Horas);
                                AcumuladoEmpleado[n][2] = parseFloat(AcumuladoEmpleado[n][2]) - Dias;
                                //console.log(AcumuladoEmpleado[n][2] + "=" + AcumuladoEmpleado[n][2] + " - " + Dias);
                                AcumuladoEmpleado[n][3] = parseFloat(AcumuladoEmpleado[n][3]) - Importe;
                                //console.log(AcumuladoEmpleado[n][3] + "=" + AcumuladoEmpleado[n][3] + " - " + Importe);
                            }
                            if (Tipo == 3) {
                                AcumuladoEmpleado[n][1] = parseFloat(AcumuladoEmpleado[n][1]) - Horas;
                                //console.log(AcumuladoEmpleado[n][1] + "=" + AcumuladoEmpleado[n][1] + " - " + Horas);
                                AcumuladoEmpleado[n][2] = parseFloat(AcumuladoEmpleado[n][2]) - Dias;
                                //console.log(AcumuladoEmpleado[n][2] + "=" + AcumuladoEmpleado[n][2] + " - " + Dias);
                                AcumuladoEmpleado[n][3] = parseFloat(AcumuladoEmpleado[n][3]) - Importe;
                                //console.log(AcumuladoEmpleado[n][3] + "=" + AcumuladoEmpleado[n][3] + " - " + Importe);
                            }
                            if (Tipo == 4) {
                                AcumuladoEmpleado[n][1] = parseFloat(AcumuladoEmpleado[n][1]) - Horas;
                                //console.log(AcumuladoEmpleado[n][1] + "=" + AcumuladoEmpleado[n][1] + " - " + Horas);
                                AcumuladoEmpleado[n][2] = parseFloat(AcumuladoEmpleado[n][2]) - Dias;
                                //console.log(AcumuladoEmpleado[n][2] + "=" + AcumuladoEmpleado[n][2] + " - " + Dias);
                                AcumuladoEmpleado[n][3] = parseFloat(AcumuladoEmpleado[n][3]) - Importe;
                                //console.log(AcumuladoEmpleado[n][3] + "=" + AcumuladoEmpleado[n][3] + " - " + Importe);
                            }
                        }
                        if (Aplicador == 0) {
                           
                            AcumuladoEmpleado[n][1] = parseFloat(AcumuladoEmpleado[n][1]) + Horas;
                            //console.log(AcumuladoEmpleado[n][1] + "=" + AcumuladoEmpleado[n][1]+" + "+Horas);
                            AcumuladoEmpleado[n][2] = parseFloat(AcumuladoEmpleado[n][2]) + Dias;
                            //console.log(AcumuladoEmpleado[n][2] + "=" + AcumuladoEmpleado[n][2] + " + " + Dias);
                            AcumuladoEmpleado[n][3] = parseFloat(AcumuladoEmpleado[n][3]) + Importe;
                            //console.log(AcumuladoEmpleado[n][3] + "=" + AcumuladoEmpleado[n][3] + " + " + Importe);
                        }

                        console.log("Acuid ap:" + Aplicador + ", Tipo: " + Tipo + "  -> "  + IdAcumuladoActualizar + ": " + AcumuladoEmpleado[n][3]);
                    }
                }
            }
        }
        console.log("Sale Acu:" + CAcumulado(72, "Importe"));
    }
    function tab(val1, val2, val3) {
        var Regresa = 0;
        var Renglon;
        //alert(val1+"-"+val2+"-"+val3);
        for (var a = 0; a < TablasArray.length; a++) {
            if (TablasArray[a][0] == val1 && TablasArray[a][1] == 1 && parseFloat(TablasArray[a][3]) <= parseFloat(val3)) {
                Renglon = TablasArray[a][2];
                //console.log("Renglon:" + Renglon);
                //console.log("Tabla:" + TablasArray[a][3] +",Sueldo:"+val3);
            }
        }

        for (var a = 0; a < TablasArray.length; a++) {
            if (TablasArray[a][0] == val1 && TablasArray[a][1] == val2 && TablasArray[a][2] == Renglon) {
                //console.log(TablasArray[a]);
                Regresa = TablasArray[a][3];
            }

        }
        return  parseFloat(Regresa);
    }
    function NombresGlobal() {
        NomGlobales = new Array();
        var Params = "{ BaseCliente: '" + BaseCliente + "' }";
        $.ajax({
            async: false,
            type: "POST",
            url: "../Proceso.aspx/NombresGlobal",
            contentType: "application/json;charset=utf-8",
            data: Params,
            dataType: "json",
            success: function (result) {
                var Datos = new Array();
                var Dato = new Array();
                Datos = result.d.split("@");
                for (var j = 0; j < Datos.length; j++) {
                    Dato = Datos[j].split('|');
                    //console.log(Dato);
                   // if (Dato[2].trim() == "1") {
                        //console.log(Dato[0] +":"+new Date(Dato[1].trim()));
                   //     NomGlobales.push(new Array(Dato[0].trim(), new Date(Dato[1].trim()), Dato[3].trim()));
                   // } else {
                        NomGlobales.push(new Array(Dato[0].trim(), Dato[1].trim(), Dato[3].trim()));
                    //}
                }

            }
        });

    }

