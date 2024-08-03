import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RankHolderDetailsComponent } from './rank-holder-details/rank-holder-details.component';



@NgModule({
  declarations: [
    RankListComponent,
    RankHolderDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RankListModule { }
