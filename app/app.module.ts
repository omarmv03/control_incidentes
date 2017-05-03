import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewUserComponent } from './users/New/new-user.component';
import { LoginComponent } from './users/Login/login.component';
import { ServerService } from './shared/services/server.service';
import { UserService } from './shared/services/user.service';
import { CanActivateViaAuthGuard } from './shared/services/login-auth.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRouting } from './app.routes';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF} from '@angular/common';
import { ViewComponent } from './home/view/view.component';
import { HomeRouting } from './home/home.route';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DescComponent } from './home/view/desc.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { LoadComponent } from './home/load/load.component';

@NgModule({
  imports: [ 
    Ng2TableModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    AppRouting,
    HomeRouting,
  ],
  declarations: [ 
    AppComponent,
    NewUserComponent,
    LoginComponent,
    HomeComponent,
    ViewComponent,
    ModalComponent,
    DescComponent,
    LoadComponent,
  ],
  providers: [
      ServerService,
      UserService,
      CanActivateViaAuthGuard,
      {provide: APP_BASE_HREF, useValue : '/' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]
})
export class AppModule {}