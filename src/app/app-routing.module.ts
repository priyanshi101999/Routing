import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
 {path:'login' , component: LoginComponent},
 {path:'not-found' , component: NotFoundComponent},
 {path:'' ,redirectTo : '/login', pathMatch: 'full'},
 {path:'forgetpassword' , component: ForgetPasswordComponent},


  {
    path: 'admin',
  canActivate: [AuthGuard],
    loadChildren: () => import('./module/admin/admin.module').then((m) => m.AdminModule)
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
