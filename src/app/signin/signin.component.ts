import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  fl = false;
  first = false;

  constructor(private cs:ConnectionService){
    this.cs.login$.subscribe((data:boolean)=>{
      this.first = true;
      this.fl = data;
      if(!data){
        this.UserNameObj?.setValue('')
        this.PasswordObj?.setValue('')
      }
    })
  }

  success ={
    type: 'info',
    msg: `You successfully Login`
  }
  failed = {
    type: 'danger',
    msg: `Check your Username and Password`
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
