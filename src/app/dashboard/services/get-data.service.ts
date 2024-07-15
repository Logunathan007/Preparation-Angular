import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  carouselData:any = []

  constructor(private http:HttpClient) {
    http.get("http://localhost:3000/course_details").subscribe((data:any)=>{
      data.forEach((element:any) => {
        this.carouselData.push(element)
      });

    })
  }
}
