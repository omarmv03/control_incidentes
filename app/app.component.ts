import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges{

    user: User = new User();

    constructor(private _userService: UserService){ 

    }

    ngOnInit(){
      let _self: any = this;

      this._userService.UserProfile.subscribe((profile: any) => {
          if (profile) {
              _self.user = profile;
          }
      });      
    }

    ngOnChanges(): void {
    }
}
