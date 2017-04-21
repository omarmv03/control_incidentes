"use strict";
/* * *  * * */
var Incidents = (function () {
    /* constructor(
         public id: Date,
         public author: string,
         public text:string
         ){}*/
    function Incidents(ID_CONTROL, INCIDENCIA, CHANGESET, MODULO, PAQUETE, SP, TIPO, CAMBIO_REALIZADO, AUTOR, FECHA, EN_TEST, EN_UAT, EN_PRD, SPRINT, MSG_COMPILADOR, FECHA_ULT_MOD, ACTIVE) {
        this.ID_CONTROL = ID_CONTROL;
        this.INCIDENCIA = INCIDENCIA;
        this.CHANGESET = CHANGESET;
        this.MODULO = MODULO;
        this.PAQUETE = PAQUETE;
        this.SP = SP;
        this.TIPO = TIPO;
        this.CAMBIO_REALIZADO = CAMBIO_REALIZADO;
        this.AUTOR = AUTOR;
        this.FECHA = FECHA;
        this.EN_TEST = EN_TEST;
        this.EN_UAT = EN_UAT;
        this.EN_PRD = EN_PRD;
        this.SPRINT = SPRINT;
        this.MSG_COMPILADOR = MSG_COMPILADOR;
        this.FECHA_ULT_MOD = FECHA_ULT_MOD;
        this.ACTIVE = ACTIVE;
    }
    return Incidents;
}());
exports.Incidents = Incidents;
//# sourceMappingURL=incidents.js.map