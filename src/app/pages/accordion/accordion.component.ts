// Fonte: https://ng-bootstrap.github.io/#/components/accordion/examples

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wdi-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  conteudo:string=`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
  officia
  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
  tempor,
  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
  helvetica,
  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
  Leggings
  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
  accusamus
  labore sustainable VHS.`;

  disabled:boolean = false;

  constructor() { }

  ngOnInit(): void {}

}
