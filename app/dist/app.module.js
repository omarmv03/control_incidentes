"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var users_component_1 = require("./users/users.component");
var new_user_component_1 = require("./users/New/new-user.component");
var login_component_1 = require("./users/Login/login.component");
var server_service_1 = require("./shared/services/server.service");
var http_1 = require("@angular/http");
var routes_component_1 = require("./shared/routes/routes.component");
var home_component_1 = require("./home/home.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            http_1.JsonpModule,
            routes_component_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            users_component_1.UsersComponent,
            new_user_component_1.NewUserComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            server_service_1.ServerService,
            routes_component_1.appRoutingProviders
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map