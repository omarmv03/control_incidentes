import { Component, Input,Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'new-user',
  templateUrl: './app/users/New/new-user.component.html',
  styleUrls: ['./app/users/New/new-user.component.scss']
})

export class NewUserComponent {

  public user: User;
  
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  //active: boolean = true;

  onSubmit() {
    // show the event that the user was created
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
    //this.active = false;
    //setTimeout(() => this.active = true, 0);
  }
}