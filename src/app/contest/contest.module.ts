import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestComponent } from './contest/contest.component';
import { ServicesService } from './services/services.service';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './testpage/testpage.component';
import { TimerComponent } from './timer/timer.component';
import { QuestionComponent } from './question/question.component';
import { ChoiseComponent } from './choise/choise.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const router:Routes = [
  {
    path:'',
    component:ContestComponent
  },{
    path:'testpage',
    component:TestpageComponent
  },
]

@NgModule({
  declarations: [
    ContestComponent,
    TestpageComponent,
    TimerComponent,
    QuestionComponent,
    ChoiseComponent,
    CheckListComponent,
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ModalModule.forRoot()
  ],
  providers:[
    ServicesService,
  ]
})
export class ContestModule { }
