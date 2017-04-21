import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/New/new-user.component';
import { LoginComponent } from './users/Login/login.component';
import { ServerService } from './shared/services/server.service';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule
  ],
  declarations: [ 
    AppComponent,
    UsersComponent,
    NewUserComponent,
    LoginComponent
  ],
  providers: [
      ServerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}