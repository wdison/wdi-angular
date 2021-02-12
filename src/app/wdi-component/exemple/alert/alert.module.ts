import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent, CardModule } from '../../card';
import { AlertBasicModule } from './alert-basic';
import { AlertCloseableModule } from './alert-closeable';
import { AlertConfigModule } from './alert-config';
import { AlertCustomModule } from './alert-custom';
import { AlertSelfclosingModule } from './alert-selfclosing';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    BrowserModule,
    AlertBasicModule,
    AlertCloseableModule,
    AlertSelfclosingModule,
    AlertCustomModule,
    AlertConfigModule,
    CardModule
  ],
  exports:[AlertComponent],
  bootstrap:[AlertComponent]
})
export class AlertModule {}
