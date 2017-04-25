import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    ruteo : boolean = false;
    // Constructor with injected service
    constructor(private router: Router,
                private location: Location){}

    route(route){
    this.router.navigate(['/'+route]);
    }

    public isHidden() {
        let list = ["/home"], route = this.location.path();

        return (list.indexOf(route) > -1);
    }
}