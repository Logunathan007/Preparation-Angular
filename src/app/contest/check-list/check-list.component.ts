import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.scss'
})
export class CheckListComponent{

  @Input("currentQuestionIndex")
  currentQuestionIndex:number = 0;

  @Input("totalNoOfQuestions")
  totalNoOfQuestions:number = 0

  @Input("randomSet")
  randomSet:any


  @Output("numberClicked")
  indexChanged:EventEmitter<any> = new EventEmitter();

  questionNumberClicked(ind:any){
    this.indexChanged.emit(ind)
  }
}
