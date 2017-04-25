import { Component, Input } from '@angular/core';
import { ServerService } from '../../shared/services/server.service';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  newUser: User = new User();
  // Constructor with injected service
  constructor(private userService: UserService) {}

  onSubmit() {
      this.userService.login(this.newUser);

      this.newUser = this.userService.getUser();
  }

}