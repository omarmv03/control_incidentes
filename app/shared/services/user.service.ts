import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './server.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(private _server: ServerService){}

    /*GetProfile(cb: Function) {
        let _self: any = this;
        this._server.apiCall("userGetProfilePost", {}, function (err: any, data: any) {
            if (err) {
                _self._toast.Post("Ups.. There was a problem looking for your profile.", "alert", 0);
                return;
            }
            return cb();
        });
    }*/
}