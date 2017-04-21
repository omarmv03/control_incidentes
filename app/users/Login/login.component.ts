import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { ServerService } from '../../shared/services/server.service';

@Component({
  selector: 'login-user',
  templateUrl: './app/users/Login/login.component.html',
  styleUrls: ['./app/users/Login/login.component.scss']
})

export class LoginComponent {

  public user: User;
  response : any;
  newUser: User = new User();

  // Constructor with injected service
  constructor(private serverService: ServerService) {}

  onSubmit() {
    // Get all comments
    this.serverService.loginUser(this.newUser.domain, this.newUser.username, this.newUser.password).subscribe(
              //data => this.incidents = data,
              data => this.result(data),
              err => err,
              () => console.log('Login Error')
              );
  }

  result(val){
    this.response = val[0];
  }

}