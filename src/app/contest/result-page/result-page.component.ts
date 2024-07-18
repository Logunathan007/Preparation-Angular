import { AfterContentInit, AfterRenderOptions, AfterViewChecked, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss'
})
export class ResultPageComponent implements DoCheck{
  @Input("totalNoOfQuestions")
  totalNoOfQuestions:number = 0

  @Input("randomSet")
  randomSet:any


  // <h5>Total number of questions : {{ '' }}</h5>
  tnq = 0
  // <h5>Number of Questions attend : {{ '' }}</h5>
  nqa = 0
  // <h5>Number of Questions correct : {{ '' }}</h5>
  nqc = 0
  // <h5>Your got 100 out of {{ '' }}</h5>
  percentage = 0

  ngDoCheck(): void {
    console.log("ngDoCheck");

    this.tnq = this.randomSet.length
    this.nqa = 0;
    this.nqc = 0;
    this.randomSet.forEach((element:any) => {
      if(element.selectedOptionIndex != -1){
        this.nqa+=1;
        if(element.options[element.selectedOptionIndex] === element.answer){
          this.nqc+=1;
        }
      }
    });
    this.percentage = this.nqc*10;
  }
}
