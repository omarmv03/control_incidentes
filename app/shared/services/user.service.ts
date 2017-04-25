import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './server.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { User } from '../../shared/models/user';

@Injectable()
export class UserService {

    newUser: User = new User();

    constructor(private serverService: ServerService,
                private router: Router){}

    isAuthenticated():boolean {
        return this.newUser.estado;
    }

    login(user: User){
        console.log(user);
        this.newUser = user;
        var _user =user.username.split('\\')[1];
        var _domain=user.username.split('\\')[0];

        // Get all comments
        this.serverService.loginUser(_domain, _user, user.password).subscribe(
                //data => this.incidents = data,
                data => this.result(data),
                err => err,
                () => console.log('Login Error')
                );
    }

    result(val){
        this.newUser.estado = val[0].estado;
        this.newUser.result = val[0].result;

        console.log('this.newUser');
        console.log(this.newUser);

        if (this.newUser.estado){
            //this.route.snavigate(['/home', token]);
            this.router.navigate(['/home']);
        }
    }

    getUser():User{
        return this.newUser;
    }
}