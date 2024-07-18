import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MaterialComponent } from './material/material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { GetDataService } from './services/get-data.service';

// const routes:Routes = [
//   {
//     path:"",
//     component:DashboardComponent
//   },
//   {
//     path:"home",
//     component:CarouselComponent
//   },
//   {
//     path:"material",
//     component:MaterialComponent
//   }
// ]

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    CarouselComponent,
    MaterialComponent,
    DashboardComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  exports:[
    DashboardComponent
  ],
  providers:[
    GetDataService,
  ]
})
export class DashboardModule { }
