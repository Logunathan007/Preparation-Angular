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

      let nums = []
      let i = 0;
      while(this.randomSet.length != 10){
        var ind = Math.floor(Math.random()*this.questionSet.length);
        if(nums.indexOf(ind) == -1){
          if(this.questionSet.length != 0){
            var obj = this.questionSet[ind]
            obj['questionNo'] = i+1
            obj['selectedOptionIndex'] = -1;
            if(i == 0){
              obj['visited'] = true
            }else{
              obj['visited'] = false
            }

            this.randomSet.push(obj);
            i++;
          }else{
            break;
          }
          nums.push(ind);
        }
      }
    })
  }
  currentQuestionIndex:any = 0;

  changeCurrentQuestionIndex(ind:any){
    this.currentQuestionIndex = ind;
    this.randomSet[ind].visited = true;
  }

}
