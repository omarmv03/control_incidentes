import { Routes, RouterModule  } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './users/Login/login.component';
import { CanActivateViaAuthGuard } from './shared/services/login-auth.service';
import { ViewComponent } from './home/view/view.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [CanActivateViaAuthGuard] }
  ];    

export const appRoutingProviders: any[] = [

];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });