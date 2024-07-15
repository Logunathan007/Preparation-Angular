import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes:Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    redirectTo:"",
    pathMatch:"full"
  },
  // {
  //   path:"",
  //   component:HomeComponent
  // },
]

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot()
  ],
  exports:[
    HomeComponent
  ]
})
export class DashboardModule { }
