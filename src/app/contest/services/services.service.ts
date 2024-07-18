import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  questions_list:any = {};
  testStatus = "open";

  public bs:BehaviorSubject<any> = new BehaviorSubject(this.questions_list);
  public tc:BehaviorSubject<string> = new BehaviorSubject("open");

  constructor(private http:HttpClient) {
    http.get("http://localhost:3000/questions").subscribe((data)=>{
      this.questions_list = data
      this.bs.next(this.questions_list);
    })
  }
  emit(){
    this.bs.next(this.questions_list);
  }
  testStatusChanged(msg:string){
    this.testStatus = msg;
    this.tc.next(msg);
  }
}
