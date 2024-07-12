import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http:HttpClient) { }

  login$:Subject<boolean> = new Subject();
  signup$:Subject<boolean> = new Subject();

  URL = `http://localhost:3000/`

  loginValidate(path:string,userId:any,password:any){
    this.http.get<any[]>(this.URL+`${path}`).subscribe(
      (data:any[])=>{
        var fl = true;
        data.forEach((element:any) => {
          console.log("data is ",element)
          if(element.userid === userId && element.password === password){
            fl = false;
            this.login$.next(true);
          }
        });
        if(fl) this.login$.next(false);
      }
    )
  }

  signupValidate(path:string,userId:any,password:any){
    this.http.get<any[]>(this.URL+`${path}`).subscribe(
      (data:any[])=>{
        var fl = true;

        console.log("all data is ",data)
        data.forEach((element:any) => {
          console.log("data is ",element)
          if(element.userid === userId && element.password === password){
            fl = false;
            this.signup$.next(false);
          }
        });

        if(fl){
          this.http.post(this.URL+`${path}`,{userid:userId,password:password})
          console.log("data stored in db");
          this.login$.next(true);
        }

      }
    )
  }

}
