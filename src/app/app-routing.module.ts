import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { loginAuthGuard } from './guards/login-auth.guard';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'dashboard',
    loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[loginAuthGuard]
  },
  {
    path:'dashboard/taketest',
    loadChildren:()=> import('./taketest/taketest.module').then(m=>m.TaketestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
