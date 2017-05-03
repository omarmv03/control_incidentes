import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Incidents } from '../../shared/models/incidents';
import { ServerService } from '../../shared/services/server.service';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { ViewComponent } from '../../home/view/view.component';

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})

export class LoadComponent implements OnInit {

    //incidents:Incidents[] = new Array<Incidents>();
    incidents:Incidents = new Incidents();
    user: User = new User();
    objects:any;
    _paquetes:any;
    radioSelected:string = 'BASE';
    // Constructor with injected service
    constructor(private serverService: ServerService,
                private _userService: UserService) {
    }

    saveData(val){
        this.objects = val;
        this._paquetes = this.objects.filter((a:any)=>
                            a.OBJECT_TYPE == 'PACKAGE');
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

    }
    onChange(ev){
        console.log(ev);
    }
    fileChangeEvent(ev){
        this.incidents.PAQUETE =ev.target.files[0].name;
    }
    onSubmit(){
        console.log('onSubmit');
        console.log(this.incidents);
    }

}