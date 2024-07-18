import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultPageComponent } from '../result-page/result-page.component';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit{
  min = 0;
  sec = 0

  dateObj!:Date;
  str:string = "Test Start on : "
  constructor(private router: Router,private ss:ServicesService){
    this.dateObj = new Date();
    this.str += this.dateObj.getDate() +"-"
    this.str += this.dateObj.getMonth() +"-"
    this.str += this.dateObj.getFullYear() +" at "
    this.str += this.dateObj.getHours() +":"
    this.str += this.dateObj.getMinutes()
  }
ngOnInit(): void {
  this.min =9;
  this.sec = 59;


  const startTimer = setInterval(()=>{
    console.log("this is worked");
    if(this.sec === 1 && this.min === 0){
      clearInterval(startTimer)
      // staticModal.show()
      // var rpc = new ResultPageComponent()
      if(this.ss.testStatus === 'open')
        this.ss.testStatusChanged("closed");
      console.log("clearInterval(startTimer)")
    }
    if(this.sec == 0){
      this.sec = 60;
      this.min--;
    }

    this.sec--;
  },1000)
  this.ss.tc.subscribe((data)=>{
    if(data === "closed"){
      clearInterval(startTimer)
    }
  })
}
}
