import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrl: './choise.component.scss'
})
export class ChoiseComponent {
  @Input("ch")
  ch:any

  @Input("ans")
  ans:any

  @Input("clickedId")
  clickedId:any

  fl = 0

  @Output('id')
  id:EventEmitter<any> = new EventEmitter();
  selected(id:any){
    this.id.emit(id)
  }

  @Input("idIs")
  idIs = "";
}
