import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { loginAuthGuard } from './guards/login-auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MaterialComponent } from './dashboard/material/material.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TaketestComponent } from './taketest/taketest/taketest.component';
import { ContestComponent } from './contest/contest/contest.component';
import { TestpageComponent } from './contest/testpage/testpage.component';

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
    canActivate:[loginAuthGuard],
    component:DashboardComponent,
    // loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"material",
        component:MaterialComponent
      },
      {
        path:"taketest",
        component:TaketestComponent
      },
      {
        path:"contest",
        component:ContestComponent
      },
    ]
  },
  {
    path:"dashboard/contest/testpage",
    canActivate:[loginAuthGuard],
    component:TestpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
