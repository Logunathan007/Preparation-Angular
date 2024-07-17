import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss'
})
export class DynamicPageComponent implements OnChanges{
  rotate = true;
  maxSize = 3;
  itemsPerPage = 5;
  currentPage = 1;
  status = "ON";

  @Input('datas')
  datas:any = []

  totalNumberOfItems = this.datas.length

  ngOnChanges(changes: SimpleChanges): void {
    this.itemsPerPage = this.datas.length
    this.currentPageData = this.datas.slice(0,this.itemsPerPage)
    console.log("ngOninit",this.currentPageData);
  }

  ngOnInit(): void {

  }

  currentPageData = [];

  pageChanged(event: PageChangedEvent): void {
    var cp = event.page
    var ipp = event.itemsPerPage
    var tnoi = this.datas.length
    var end_ind = cp*ipp;
    var start_ind = cp*ipp-ipp;
    console.log(start_ind,end_ind);
    this.currentPageData = this.datas.slice(start_ind,end_ind)
    console.log("pageChanged",this.currentPageData);
  }

}
