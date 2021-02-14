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
  classMainMenu = 'col-md-1 col-sm-2';
  classMainContent = 'col-md-11 col-sm-10';

  @Input() mainTitle: string;
  @Input() mainTitleTooltip:string;
  @Input() menus: Menu[];

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    if(this.navbarOpen){
      this.classMainMenu = 'col-md-3 col-sm-6';
      this.classMainContent = 'col-md-9 col-sm-6';
    }else{
      this.classMainMenu = 'col-md-1 col-sm-2';
      this.classMainContent = 'col-md-11 col-sm-10';
    }
  }
}
