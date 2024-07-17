import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaketestComponent } from './taketest/taketest.component';
import { RouterModule,Routes } from '@angular/router';
import { QuestinCardComponent } from './questin-card/questin-card.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { GetQuestionsService } from './services/get-questions.service';
import { ChoiseComponent } from './choise/choise.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:"",
    component:TaketestComponent
  }
]

@NgModule({
  declarations: [
    TaketestComponent,
    QuestinCardComponent,
    DynamicPageComponent,
    ChoiseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginationModule.forRoot(),
    CollapseModule,
    FormsModule
  ],
  providers:[
    GetQuestionsService
  ]
})
export class TaketestModule {

}
