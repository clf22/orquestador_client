import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login.component';
import { UploadComponent } from './layout/privado/upload/upload.component';
import { AuthGuard } from './setting/auth.guard';
import { UsersComponent } from './layout/privado/users/users.component';
import { ConfigComponent } from './layout/privado/config/config.component';
import { CompanyComponent } from './layout/privado/company/company.component';
import { ProcessComponent } from './layout/privado/process/process.component';
import { JobComponent } from './layout/privado/job/job.component';
import { DataBarComponent } from './utils/commons/data-bar/data-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/process', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
  { path: 'process', component: ProcessComponent, canActivate: [AuthGuard]},
  { path: 'jobs', component: JobComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard]},
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuard]},
  { path: 'test', component: DataBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
