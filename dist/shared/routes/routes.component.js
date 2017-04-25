"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../../home/home.component");
var login_component_1 = require("../../users/login/login.component");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
/*
export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two/:id', component: ComponentTwo }
];
*/
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.component.js.map