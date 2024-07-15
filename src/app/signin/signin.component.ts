import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  msg:string = "";
  fl = false
  first = false;
  msgFormat = {};
  constructor(private cs:ConnectionService,private router:Router){
    this.cs.login$.subscribe((data:string)=>{
      this.first = true;
      this.msg = data;
      this.fl = true;
      setTimeout(()=>{
        this.fl = false;
        if(this.msg?.charAt(0) === 's')
          router.navigate(['dashboard']);
      },3000)
      this.msgFormat = {
        type: (this.msg?.charAt(0) === 's')?'info':'danger',
        msg: this.msg?.substring(2)
      }
    })
  }
  formGroup = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  validate(){
    if(this.formGroup.invalid) return;
    this.cs.loginValidate('user_data',this.UserNameObj?.value,this.PasswordObj?.value)
  }
  get UserNameObj(){
    return this.formGroup.get('username')
  }
  get PasswordObj(){
    return this.formGroup.get('password')
  }
}
