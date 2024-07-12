import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  fl = false;

  constructor(private cs:ConnectionService){
    this.cs.signup$.subscribe((data:boolean)=>{
      this.fl = data;
    })
  }
  success ={
    type: 'info',
    msg: `You data successfully Stored`
  }
  failed = {
    type: 'danger',
    msg: `UserId already used.`
  }

  formGroup = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpassword:new FormControl('',Validators.required)
  })
  validate(){
    if(this.formGroup.invalid) return;
    this.cs.signupValidate('user_data',this.UserNameObj?.value,this.PasswordObj?.value)
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
