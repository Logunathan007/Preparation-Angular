import { ViewportScroller } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss'
})
export class DynamicPageComponent implements OnChanges{
  rotate = true;
  maxSize = 5;
  itemsPerPage = 5;
  currentPage = 1;
  status = "ON";

  @Input('datas')
  datas:any[] = []

  currentPageData:any[] = [];

  totalNumberOfItems = this.datas.length

  ngOnChanges(changes: SimpleChanges): void {
    if(this.datas){
      this.totalNumberOfItems = this.datas.length
      this.currentPageData = this.datas.slice(0,this.itemsPerPage)
    }
    this.currentPage = 1;
  }

  pageChanged(event: PageChangedEvent): void {
    var cp = event.page
    var ipp = event.itemsPerPage
    var tnoi = this.datas.length
    var end_ind = cp*ipp;
    var start_ind = cp*ipp-ipp;
    console.log(start_ind,end_ind);
    this.currentPageData = this.datas.slice(start_ind,end_ind)
    console.log("pageChanged",this.currentPageData);
    window.scrollTo(0, 0);
  }
}
