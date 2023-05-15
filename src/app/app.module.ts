import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/publico/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './layout/privado/upload/upload.component';
import { AuthGuard } from './setting/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './layout/privado/menu/menu.component';
import { UsersComponent } from './layout/privado/users/users.component';
import { FormUserComponent } from './layout/privado/users/form-user/form-user.component';
import { TableUserComponent } from './layout/privado/users/table-user/table-user.component';
import { ConfigComponent } from './layout/privado/config/config.component';
import { RolComponent } from './layout/privado/config/rol/rol.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent,
    MenuComponent,
    UsersComponent,
    FormUserComponent,
    TableUserComponent,
    ConfigComponent,
    RolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
