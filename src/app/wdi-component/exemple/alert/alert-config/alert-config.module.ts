import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertConfigComponent } from './alert-config.component';



@NgModule({
  declarations: [AlertConfigComponent],
  imports: [
    BrowserModule,
    NgbModule
  ],
  exports:[AlertConfigComponent],
  bootstrap:[AlertConfigComponent]
})
export class AlertConfigModule { }
