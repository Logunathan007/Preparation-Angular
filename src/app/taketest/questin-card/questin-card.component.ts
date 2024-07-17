import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questin-card',
  templateUrl: './questin-card.component.html',
  styleUrl: './questin-card.component.scss'
})
export class QuestinCardComponent implements OnInit{
  isCollapsed = false;

  activeHeader = "C";

  @Input('qdata')
  qdata:any = {}

  str:string = this.qdata.id || ""
  num = this.str?.split("question").pop() || ""

  ngOnInit(): void {
    this.str = (this.qdata.id)
    this.num = this.str.split("question").pop() || ""
  }

  id = "";
  selectedId(id:any){
    this.id = id;
  }
  funCall(){
    console.log("Fun Called")
  }
}
