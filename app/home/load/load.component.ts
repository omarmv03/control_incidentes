import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Incidents } from '../../shared/models/incidents';
import { ServerService } from '../../shared/services/server.service';
import { User } from '../../shared/models/user';
import { BaseModel } from '../../shared/models/baseobj';
import { UserService } from '../../shared/services/user.service';
import { ViewComponent } from '../../home/view/view.component';

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})

export class LoadComponent implements OnInit {

    incidents:Incidents = new Incidents();
    user: User = new User();
    objects:BaseModel[]= new Array<BaseModel>();
    _paquetes:Array<BaseModel> = [];
    //radioSelected:string = 'BASE';
    err_Inc:boolean;
    err_Spr:boolean;
    err_Chg:boolean;
    err_Mod:boolean;
    err_Pkg:boolean;
    err_Prc:boolean;
    err_Scr:boolean;
    err_Det:boolean;
    // Constructor with injected service
    constructor(private serverService: ServerService,
                private _userService: UserService) {
    }

    saveData(val){
        this.objects = val;
        this._paquetes = this.objects.filter((a:any)=>
                            a.OBJECT_TYPE == 'PACKAGE');
        //Setea el seleccionar del component SELECT
        this.incidents.PAQUETE = '-1'
    }
    saveSprint(val){
        this.incidents.SPRINT = val[0].SPRINT;
    }

    getTodayDate():string{
        var today = new Date();
        var dd = today.getDate().toString(); 
        var mm = (today.getMonth()+1).toString();
        var yyyy = today.getFullYear();

        if(dd<'10'){
            dd='0'+dd;
        } 
        if(mm<'10'){
            mm='0'+mm;
        } 
        return dd+'/'+mm+'/'+yyyy;
    }

    ngOnInit(){
        let _self: any = this;
        // Get MAX Sprint
        this.serverService.getMaxSprint().subscribe(
                data => this.saveSprint(data),
                err => err,
                () => console.log('Random Quote Complete')
        );
        // Get all objects
        this.serverService.getObjects().subscribe(
                data => this.saveData(data),
                err => err,
                () => console.log('Random Quote Complete')
        );

        this._userService.UserProfile.subscribe((profile: any) => {
            if (profile) {
                _self.user = profile;
            }
        });

        this.incidents.AUTOR = this.user.username;
        this.incidents.FECHA = this.getTodayDate();
        //this.incidents.TIPO = 'BASE'

    }
    onChange(ev){
        let objeto: any;
        objeto = this.objects.filter((a:any)=>
                            a.OBJECT_NAME == ev);

        this.incidents.MODULO =objeto[0].OWNER;
    }
    fileChangeEvent(ev){
        this.incidents.PAQUETE =ev.target.files[0].name;
    }
    selectRadio(radioVal){
        this.err_Inc = false;
        this.err_Spr = false;
        this.err_Chg = false;
        this.err_Mod = false;
        this.err_Pkg = false;
        this.err_Prc = false;
        this.err_Scr = false;
        this.err_Det = false;

        this.incidents.MODULO = '';
        if (radioVal ==='BASE'){
            this.incidents.PAQUETE ='-1';
        }else{
            this.incidents.PAQUETE ='';
        }
        this.incidents.TIPO = radioVal;
    }
    onSubmit(){
        console.log('onSubmit');
        this.err_Inc = false;
        this.err_Spr = false;
        this.err_Chg = false;
        this.err_Mod = false;
        this.err_Pkg = false;
        this.err_Prc = false;
        this.err_Scr = false;
        this.err_Det = false;

        if (this.incidents.INCIDENCIA === "" || this.incidents.INCIDENCIA === undefined){
            this.err_Inc=true;
        }
        if (this.incidents.SPRINT === "" || this.incidents.SPRINT === undefined){
            this.err_Spr=true;
        }
        if (this.incidents.CHANGESET === "" || this.incidents.CHANGESET === undefined){
            this.err_Chg=true;
        }
        if (this.incidents.MODULO === "" || this.incidents.MODULO === undefined){
            this.err_Mod=true;
        }
        if (this.incidents.PAQUETE === "" || this.incidents.PAQUETE === "-1" || this.incidents.PAQUETE === undefined && this.incidents.TIPO == 'BASE') {
            this.err_Pkg=true;
        }
        if (this.incidents.PAQUETE === "" || this.incidents.PAQUETE === undefined && this.incidents.TIPO != 'BASE') {
            this.err_Scr=true;
        }
        if (this.incidents.SP === "" || this.incidents.SP === undefined && this.incidents.TIPO =='BASE'){
            this.err_Prc=true;
        }
        if (this.incidents.CAMBIO_REALIZADO === "''" || this.incidents.CAMBIO_REALIZADO === undefined){
            this.err_Det=true;
        }

        if ( this.err_Inc == false &&
            this.err_Spr == false &&
            this.err_Chg == false &&
            this.err_Mod == false &&
            this.err_Pkg == false &&
            this.err_Prc == false &&
            this.err_Scr == false &&
            this.err_Det == false)
        {
            console.log(JSON.stringify(this.incidents));
            this.serverService.loadInc(JSON.stringify(this.incidents));
        }
    }

}