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
import { FormComponent } from './utils/commons/form/form.component';
import { ConfigComponent } from './layout/privado/config/config.component';
import { RolComponent } from './layout/privado/rol/rol.component';
import { TableComponent } from './utils/commons/table/table.component';
import { CompanyComponent } from './layout/privado/company/company.component';
import { ProcessComponent } from './layout/privado/process/process.component';
import { JobComponent } from './layout/privado/job/job.component';
import { LoadIconComponent } from './utils/commons/load-icon/load-icon.component';
import { StatisticsComponent } from './utils/commons/statistics-unused/statistics.component';
import { DataBarComponent } from './utils/commons/data-bar/data-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent,
    MenuComponent,
    UsersComponent,
    FormComponent,
    ConfigComponent,
    RolComponent,
    TableComponent,
    CompanyComponent,
    ProcessComponent,
    JobComponent,
    LoadIconComponent,
    StatisticsComponent,
    DataBarComponent
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
