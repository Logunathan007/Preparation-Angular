import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  fl = false;
  first = false;
  msg = ""
  msgFormat = {}

  constructor(private cs:ConnectionService,private router:Router){
    this.cs.signup$.subscribe((data:string)=>{
      this.msg = data;
      this.fl = true;
      setTimeout(()=>{
        this.fl = false;
        if(this.msg?.charAt(0) === 's')
          router.navigate(['login']);
      },3000)
      this.msgFormat = {
        type: (this.msg.charAt(0) === 's')?'info':'danger',
        msg: this.msg.substring(2)
      }
    })
  }


  formGroup = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpassword:new FormControl('',Validators.required)
  })
  validate(){
    if(this.formGroup.invalid) return;
    this.cs.signupValidate('user_data',this.UserNameObj?.value,this.PasswordObj?.value)
    this.first = true;
  }
  get UserNameObj(){
    return this.formGroup.get('username')
  }
  get PasswordObj(){
    return this.formGroup.get('password')
  }
  get ConfirmPasswordObj(){
    return this.formGroup.get('cpassword')
  }
}
