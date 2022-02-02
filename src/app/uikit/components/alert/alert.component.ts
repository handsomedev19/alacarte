import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() status!:string;
  @Input() description!:string;

  statusMessage:string = '';
  statusImageURL:string = '';
  statusStyle:string = '';

  constructor() { 
  }

  ngOnInit(): void {
    // Set icon, content, color based on the status.
    switch (this.status) {
      case "success" :
        this.statusMessage = "Success Message Title";
        this.statusImageURL = "/assets/images/icons/alert_success.png";
        this.statusStyle = 'success';
        break;
      case "error" :
        this.statusMessage = "Error Message Title";
        this.statusImageURL = "/assets/images/icons/alert_error.png";
        this.statusStyle = 'error';
        break;
      case "warning" :
        this.statusMessage = "Warning Message Title";
        this.statusImageURL = "/assets/images/icons/alert_warning.png";
        this.statusStyle = 'warning';
        break;
      case "info" :
        this.statusMessage = "Info Message Title";
        this.statusImageURL = "/assets/images/icons/alert_info.png";
        this.statusStyle = 'info';
        break;
      default:
        return;
    }
  }

}
