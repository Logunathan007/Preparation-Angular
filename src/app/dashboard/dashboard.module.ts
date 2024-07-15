import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MaterialComponent } from './material/material.component';
import { TaketestComponent } from './taketest/taketest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseCardComponent } from './course-card/course-card.component';

const routes:Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"home",
    component:CarouselComponent
  },
  {
    path:"material",
    component:MaterialComponent
  },
  {
    path:"taketest",
    component:TaketestComponent
  },
]

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    CarouselComponent,
    MaterialComponent,
    TaketestComponent,
    DashboardComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot()
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
