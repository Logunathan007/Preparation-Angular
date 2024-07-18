import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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

// const routes:Routes = [
//   {
//     path:"",
//     component:TaketestComponent
//   }
// ]

@NgModule({
  declarations: [
    TaketestComponent,
    QuestinCardComponent,
    DynamicPageComponent,
    ChoiseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaginationModule.forRoot(),
    CollapseModule,
    FormsModule
  ],
  providers:[
    GetQuestionsService
  ],
  schemas:[
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    TaketestComponent
  ]
})
export class TaketestModule {

}
