import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  dateObj!:Date;
  str:string = "Test Start on : "
  constructor(){
    this.dateObj = new Date();
    this.str += this.dateObj.getDate() +"-"
    this.str += this.dateObj.getMonth() +"-"
    this.str += this.dateObj.getFullYear() +" at "
    this.str += this.dateObj.getHours() +":"
    this.str += this.dateObj.getMinutes()


  }
}
