import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertSelfclosingComponent } from './alert-selfclosing.component';



@NgModule({
  declarations: [AlertSelfclosingComponent],
  imports: [
    BrowserModule,NgbModule
  ],
  exports:[AlertSelfclosingComponent],
  bootstrap:[AlertSelfclosingComponent]
})
export class AlertSelfclosingModule { }
