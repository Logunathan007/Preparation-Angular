import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements DoCheck{
  id = "";
  selectedId(id:any){
    this.id = id;
    this.qdata.selectedOptionIndex = parseInt(""+id.charAt(id.length-1))
  }
  @Input("randomSet")
  randomSet:any = []

  @Input("currentQuestionIndex")
  currentQuestionIndex:number = 0


  ngDoCheck(): void {
    this.qdata = this.randomSet[this.currentQuestionIndex]
  }

  qdata:any = {
    "id": "c_question1",
    "question": "How many data types are there in C?",
    "options": [
      4,
      5,
      6,
      7
    ],
    "answer": 4,
    "description": "C has 4 primary data types: int, float, char, and double."
  }

  @Output("numberClicked")
  indexChanged:EventEmitter<any> = new EventEmitter();

  questionNumberClicked(ind:any){
    this.randomSet[ind].visited = true;
    this.indexChanged.emit(ind)
  }
}
