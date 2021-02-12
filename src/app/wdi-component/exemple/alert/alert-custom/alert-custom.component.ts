import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wdi-alert-custom',
  templateUrl: './alert-custom.component.html',
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class AlertCustomComponent {}
