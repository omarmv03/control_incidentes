import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';
import { NewUserComponent } from './users/new-user.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    UserProfileComponent,
    UserFormComponent,
    NewUserComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}