"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports
var core_1 = require('@angular/core');
var server_service_1 = require('../shared/services/server.service');
var UsersComponent = (function () {
    // Constructor with injected service
    function UsersComponent(serverService) {
        this.serverService = serverService;
        this.display = false;
    }
    UsersComponent.prototype.saveData = function (val) {
        this.incidents = val;
        console.log(this.incidents[0].AUTOR);
        /*console.log('SON.parse(JSON.stringify(val))');
         console.log(JSON.parse(val));*/
        this.incidents = val;
        console.log('this.incidents');
        console.log(this.incidents);
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get all comments
        this.serverService.getComments().subscribe(
        //data => this.incidents = data,
        function (data) { return _this.saveData(data); }, function (err) { return err; }, function () { return console.log('Random Quote Complete'); });
    };
    UsersComponent.prototype.showNew = function () {
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: './app/users/users.component.html',
            styleUrls: ['./app/users/users.component.scss']
        }), 
        __metadata('design:paramtypes', [server_service_1.ServerService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map