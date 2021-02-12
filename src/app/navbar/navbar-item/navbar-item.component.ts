import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'wdi-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

  @Input() itemBgClassTema:string='bg-dark';
  @Input() menu:Menu;
  dropdownId:string;

  constructor() {}

  ngOnInit(): void {
    let result = this.menu.name.replace(/\s/gi, "_");
    this.dropdownId = 'dropdownId_'+result;
  }

}
