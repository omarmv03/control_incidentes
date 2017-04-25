import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/New/new-user.component';
import { LoginComponent } from './users/Login/login.component';
import { ServerService } from './shared/services/server.service';
import { UserService } from './shared/services/user.service';
import { CanActivateViaAuthGuard } from './shared/services/login-auth.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRouting } from './app.routes';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    AppRouting 
  ],
  declarations: [ 
    AppComponent,
    UsersComponent,
    NewUserComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [
      ServerService,
      UserService,
      CanActivateViaAuthGuard,
      {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}