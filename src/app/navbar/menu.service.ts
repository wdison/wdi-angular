import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private maisInterno:Menu[]=[
    new Menu('Interno 1','interno1'),
    new Menu('Interno 2','interno2'),
  ];
  private outros:Menu[]=[
    new Menu('Outros 1','outros1'),
    new Menu('Outros 2','outros2'),
    new Menu('Outros Mais Interno','interno','',this.maisInterno),
  ];

  private subMenuNgBootstrap:Menu[]=[
    new Menu('Accordion','accordion'),
    new Menu('Carousel','carousel'),
    new Menu('Alert','alert'),
    new Menu('Outros','outros','',this.outros),
  ];

  private menus:Menu[]=[
    // new Menu('Home','home'),
    new Menu('Card','card'),
    new Menu('Emoji','emoji'),
    new Menu('Ng Bootstrap','','',this.subMenuNgBootstrap),
    new Menu('Icon','icon'),
  ];

  constructor() { }

  getMenus():Menu[] {
    return this.menus;
  }
}
