import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrl: './testpage.component.scss'
})
export class TestpageComponent {
  questionSet:any = []
  randomSet:any = []
  totalNoOfQuestions = 10
  obj = {}
  constructor(private ss:ServicesService){
    this.ss.bs.subscribe((data:any)=>{
      data['C']?.forEach((element:any) => {
        this.questionSet.push(element)
      });
      data['C++']?.forEach((element:any) => {
        this.questionSet.push(element)
      });
      data['Java']?.forEach((element:any) => {
        this.questionSet.push(element)
      });
      data['Python']?.forEach((element:any) => {
        this.questionSet.push(element)
      });

      for(var i=0;i<this.totalNoOfQuestions;i++){
        if(this.questionSet.length != 0){
          var obj = this.questionSet[Math.floor(Math.random()*this.questionSet.length)]
          obj['points'] = 0
          obj['saved'] = false
          obj['questionNo'] = i+1
          this.randomSet.push(obj);
        }
      }
      console.log("random set",this.randomSet);
    })
  }
  currentQuestion:number = 3;
}
