import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnChanges{
  id = "";
  selectedId(id:any){
    this.id = id;
  }
  funCall(){
    console.log("Fun Called")
  }
  @Input("randomSet")
  randomSet:any = []

  @Input("currentQuestion")
  currentQuestion:number = 0

  ngOnChanges(changes: SimpleChanges): void {
      this.qdata = this.randomSet[this.currentQuestion]
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



  str:string = this.qdata.id || ""
  num = this.str?.split("question").pop() || ""
}
