import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertBasicComponent } from './alert-basic.component';



@NgModule({
  declarations: [AlertBasicComponent],
  imports: [
    BrowserModule,NgbModule
  ],
  exports:[AlertBasicComponent],
  bootstrap:[AlertBasicComponent]
})
export class AlertBasicModule { }
