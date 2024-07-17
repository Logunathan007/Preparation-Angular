import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  questions_list:any = {};

  public bs:BehaviorSubject<any> = new BehaviorSubject(this.questions_list);;

  constructor(private http:HttpClient) {
    console.log("this service is not working");

    http.get("http://localhost:3000/questions").subscribe((data)=>{
      this.questions_list = data
      this.bs.next(this.questions_list);
    })
  }
  emit(){
    this.bs.next(this.questions_list);
  }

}
