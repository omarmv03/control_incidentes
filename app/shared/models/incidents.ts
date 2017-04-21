/* * *  * * */
export class Incidents {
   /* constructor(
        public id: Date, 
        public author: string, 
        public text:string
        ){}*/
    constructor(
        public ID_CONTROL: number, 
        public INCIDENCIA: string, 
        public CHANGESET:string,
        public MODULO:string,
        public PAQUETE:string,
        public SP:string,
        public TIPO:string,
        public CAMBIO_REALIZADO:string,
        public AUTOR:string,
        public FECHA:string,
        public EN_TEST:string,
        public EN_UAT:string,
        public EN_PRD:string,
        public SPRINT:string,
        public MSG_COMPILADOR:string,
        public FECHA_ULT_MOD:string,
        public ACTIVE:number
        ){}
}