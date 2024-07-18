import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConnectionService } from '../../services/connection.service';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  userId = ""

  questions_list:any = {};

  obj = {}

  public bs:BehaviorSubject<any> = new BehaviorSubject(this.questions_list);;

  constructor(private http:HttpClient,private cs:ConnectionService) {
    this.userId = this.cs.activeUserId
    http.get("http://localhost:3000/questions").subscribe((data)=>{
      this.questions_list = data
      this.bs.next(this.questions_list);
    })
  }
  emit(){
    this.bs.next(this.questions_list);
  }

}
