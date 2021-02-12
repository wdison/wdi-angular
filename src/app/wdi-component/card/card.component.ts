import { AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'wdi-card-comp',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @ContentChild("wdiCardHeader") wdiCardHeader?: TemplateRef<any>;
  @ContentChild("wdiCardBody") wdiCardBody?: TemplateRef<any>;
  @ContentChild("wdiCardFooter") wdiCardFooter?: TemplateRef<any>;
}
