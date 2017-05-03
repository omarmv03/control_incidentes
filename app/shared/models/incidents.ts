import { TypedJSON, JsonObject, JsonMember} from 'typedjson-npm/src/typed-json';

@JsonObject
export class Incidents {

    constructor() {
        this.MODULO = '';
        this.PAQUETE = '';
    }

    @JsonMember
    public ID_CONTROL: number;
    @JsonMember
    public INCIDENCIA: string;
    @JsonMember
    public CHANGESET:string;
    @JsonMember
    public MODULO:string;
    @JsonMember
    public PAQUETE:string;
    @JsonMember
    public SP:string;
    @JsonMember
    public TIPO:string;
    @JsonMember
    public CAMBIO_REALIZADO:string;
    @JsonMember
    public AUTOR:string;
    @JsonMember
    public FECHA:string;
    @JsonMember
    public EN_TEST:string;
    @JsonMember
    public EN_UAT:string;
    @JsonMember
    public EN_PRD:string;
    @JsonMember
    public SPRINT:string;
    @JsonMember
    public MSG_COMPILADOR:string;
    @JsonMember
    public FECHA_ULT_MOD:string;
    @JsonMember
    public ACTIVE:number;
}
