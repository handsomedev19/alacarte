import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitRoutingModule } from './uikit-routing.module';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AlertsComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    UikitRoutingModule
  ]
})
export class UikitModule { }
