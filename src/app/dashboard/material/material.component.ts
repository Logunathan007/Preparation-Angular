import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {
  datas:any = []
  constructor(private gd:GetDataService){
    this.datas = gd.carouselData
  }

}
