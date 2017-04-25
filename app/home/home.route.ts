import { Routes, RouterModule  } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home.component';
import { LoginComponent } from '../users/Login/login.component';
import { CanActivateViaAuthGuard } from '../shared/services/login-auth.service';
import { ViewComponent } from '../home/view/view.component';

const Homeroutes: Routes = [
  { path: '', component: HomeComponent , canActivate: [CanActivateViaAuthGuard],
    children: [
        { path: 'view', component: ViewComponent}
    ]}
];

export const appRoutingProviders: any[] = [

];

//export const HomeRouting = RouterModule.forRoot(Homeroutes, { useHash: false });
export const HomeRouting: ModuleWithProviders = RouterModule.forChild(Homeroutes);