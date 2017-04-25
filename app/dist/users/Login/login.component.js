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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/models/user");
var server_service_1 = require("../../shared/services/server.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    // Constructor with injected service
    function LoginComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.newUser = new user_1.User();
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // Get all comments
        this.serverService.loginUser(this.newUser.domain, this.newUser.username, this.newUser.password).subscribe(
        //data => this.incidents = data,
        function (data) { return _this.result(data); }, function (err) { return err; }, function () { return console.log('Login Error'); });
    };
    LoginComponent.prototype.result = function (val) {
        this.response = val[0];
        if (this.response.estado) {
            //this.route.snavigate(['/home', token]);
            this.router.navigate(['/home', 456]);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-user',
        templateUrl: './app/users/Login/login.component.html',
        styleUrls: ['./app/users/Login/login.component.scss']
    }),
    __metadata("design:paramtypes", [server_service_1.ServerService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map