import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  success:string = 'success';
  error:string = 'error';
  warning:string = 'warning';
  info:string = 'info';
  description:string = 'description';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
