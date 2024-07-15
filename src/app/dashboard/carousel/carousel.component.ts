import { Component,OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { GetDataService } from '../services/get-data.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent implements OnInit{

  constructor(private gd:GetDataService){}

  data = []

  ngOnInit(): void {
    this.data = this.gd.carouselData
    console.log(this.data);
  }
  getName(obj:any){
    return "../../../"+obj.img
  }
}
