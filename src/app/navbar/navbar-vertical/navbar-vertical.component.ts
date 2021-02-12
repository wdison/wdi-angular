import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'wdi-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.css']
})
export class NavbarVerticalComponent implements OnInit {

  navbarOpen = false;
  menuActive = true;
  classMainMenu = 'col-1';
  classMainContent = 'col-11';

  @Input() mainTitle: string;
  @Input() mainTitleTooltip:string;
  @Input() menus: Menu[];

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    if(this.navbarOpen){
      this.classMainMenu='col-3';
      this.classMainContent='col-9';
    }else{
      this.classMainMenu='col-1';
      this.classMainContent='col-11';
    }
  }
}
