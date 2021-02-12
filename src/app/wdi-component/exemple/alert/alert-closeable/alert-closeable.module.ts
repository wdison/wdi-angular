import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCloseableComponent } from './alert-closeable.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AlertCloseableComponent],
  imports: [
    BrowserModule,NgbModule
  ],
  exports:[AlertCloseableComponent],
  bootstrap:[AlertCloseableComponent]
})
export class AlertCloseableModule { }
