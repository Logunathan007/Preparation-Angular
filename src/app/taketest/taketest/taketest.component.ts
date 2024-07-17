import { Component } from '@angular/core';
import { GetQuestionsService } from '../services/get-questions.service';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrl: './taketest.component.scss'
})
export class TaketestComponent {
  activeHeader:string = "C"
  lang = ['C','C++','Java','Python']

  datas:any = {};

  constructor(private cs:GetQuestionsService){
    this.cs.bs.subscribe((data)=>{
      this.datas = data?.[this.activeHeader];
    })
  }

  toggleActiveHeader(name:string){
    this.activeHeader = name;
    this.cs.emit()
  }
}
