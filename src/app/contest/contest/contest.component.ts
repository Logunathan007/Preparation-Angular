import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrl: './contest.component.scss'
})
export class ContestComponent {
  constructor(public ss:ServicesService){}
  letsStartTest(){
    this.ss.testStatusChanged("open")
  }
}
