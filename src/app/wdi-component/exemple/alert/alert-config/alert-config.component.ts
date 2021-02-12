import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wdi-alert-config',
  templateUrl: './alert-config.component.html'
  ,providers: [NgbAlertConfig]//Providenciado para esse component
})
export class AlertConfigComponent {

  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

}
