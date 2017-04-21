// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServerService } from '../shared/services/server.service';
import { Incidents } from '../shared/models/incidents';

@Component({
  selector: 'users',
  templateUrl: './app/users/users.component.html',
  styleUrls: ['./app/users/users.component.scss']
})

export class UsersComponent implements OnInit {

  display:boolean=false;
  // Local properties
  incidents:Incidents[]; 

  // Constructor with injected service
  constructor(private serverService: ServerService) {}

  saveData(val){
    this.incidents = val;
    console.log(this.incidents[0].AUTOR);
   /*console.log('SON.parse(JSON.stringify(val))');
    console.log(JSON.parse(val));*/
    this.incidents = val;
    console.log('this.incidents');
    console.log(this.incidents);
  }
  
  ngOnInit(){
      // Get all comments
      this.serverService.getComments().subscribe(
                //data => this.incidents = data,
                data => this.saveData(data),
                err => err,
                () => console.log('Random Quote Complete')
                );
  }

  showNew(){
    if (this.display){this.display =false}else{this.display =true}
  }

}