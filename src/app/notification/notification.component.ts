import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  @Input('alerts')
  alerts:any = {}
}
