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
import { TaketestComponent } from '../taketest/taketest/taketest.component';
import { ContestComponent } from '../contest/contest/contest.component';
import { RankListComponent } from '../rank-list/rank-list/rank-list.component';

const router:Routes = [
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
    // component:ContestComponent
    loadChildren:()=>import('../contest/contest.module').then((m)=>m.ContestModule)
  },
  {
    path:"rank",
    component:RankListComponent
  }
]

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
    RouterModule.forChild(router),
    CarouselModule.forRoot()
  ],
  providers:[
    GetDataService,
  ]
})
export class DashboardModule { }
