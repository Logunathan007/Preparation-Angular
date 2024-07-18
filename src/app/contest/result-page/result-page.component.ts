import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss'
})
export class ResultPageComponent {
  @Input("totalNoOfQuestions")
  totalNoOfQuestions:number = 0

  @Input("randomSet")
  randomSet:any

  constructor(private ss:ServicesService){
    this.ss.tc.subscribe((data:string)=>{
      if(data == "closed"){
        console.log("Test closed")
        this.endTest(true)
      }
    })
  }

  // <h5>Total number of questions : {{ '' }}</h5>
  tnq = 0
  // <h5>Number of Questions attend : {{ '' }}</h5>
  nqa = 0
  // <h5>Number of Questions correct : {{ '' }}</h5>
  nqc = 0
  // <h5>Your got 100 out of {{ '' }}</h5>
  percentage = 0

  @ViewChild("childModal")
  staticModel!:ElementRef

  endTest(arg:boolean){
    this.tnq = this.randomSet?.length
    this.nqa = 0;
    this.nqc = 0;
    this.randomSet?.forEach((element:any) => {
      if(element.selectedOptionIndex != -1){
        this.nqa+=1;
        if(element.options[element.selectedOptionIndex] === element.answer){
          this.nqc+=1;
        }
      }
    });
    this.percentage = this.nqc*10;
    if(arg){
      this.ss.testStatusChanged("open");
      this.staticModel?.nativeElement.click()
    }else{
      this.ss.testStatusChanged("closed");
    }

  }
}
