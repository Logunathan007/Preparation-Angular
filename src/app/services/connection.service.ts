import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  loginFlag:boolean = false;
  str = "old";

  constructor(@Optional() public http?: HttpClient) {

  }

  login$:Subject<string> = new Subject();
  signup$:Subject<string> = new Subject();

  URL = `http://localhost:3000/`

  loginValidate(path:string,userId:any,password:any){
    this.http?.get<any[]>(this.URL+`${path}`).subscribe(
      (data:any[])=>{
        var fl = true;
        data.forEach((element:any) => {
          if(element.userid === userId){
            if(element.password === password){
              this.loginFlag = true;
              this.str = "new"
              console.log("login validate method",this.str,this.loginFlag);

              this.login$.next("s Your Successfully login");
            }else{
              this.loginFlag = false;
              this.login$.next("f Password is Not Matched")
            }
            fl = false;
          }
        });
        if(fl)this.login$.next("f User Id is not found");
      }
    )
  }

  signupValidate(path:string,userId:any,password:any){
    this.http?.get<any[]>(this.URL+`${path}`).subscribe(
      (data:any[])=>{
        var fl = true;
        data.forEach((element:any) => {
          if(element.userid === userId){
            this.signup$.next("f UserId Already used");
            fl = false
          }
        });
        if(fl){
          this.http?.post(this.URL+`${path}`,{userid:userId,password:password}).subscribe(data=>{console.log(data)})
          this.signup$.next("s Your Data is Stored Successfully");
        }
    })
  }
}
