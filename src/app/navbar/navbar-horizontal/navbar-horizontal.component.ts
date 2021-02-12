import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'wdi-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css']
})
export class NavbarHorizontalComponent implements OnInit {
  navbarOpen = false;

  @Input() mainTitle: string;
  @Input() mainTitleTooltip:string;
  @Input() menus: Menu[];

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
