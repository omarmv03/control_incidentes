import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Incidents } from '../../shared/models/incidents';
import { ServerService } from '../../shared/services/server.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

    incidents:Incidents[]; 
    _filteredInc:Incidents[];

    // Constructor with injected service
    constructor(private serverService: ServerService) {}

    saveData(val){
        this.incidents = val;
        this._filteredInc = this.incidents;
    }

    ngOnInit(){
        // Get all comments
        this.serverService.getComments().subscribe(
                data => this.saveData(data),
                err => err,
                () => console.log('Random Quote Complete')
        );
    }
    rowClicled(row){
        console.log(row);
    }

    filters(filtro) {
        this._filteredInc = this.incidents.filter((a: Incidents) =>  
        {
            return a.INCIDENCIA === filtro
        }).slice();
    }

}