import { Component, Input, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
  selector: 'wdi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  @Input() mainTitle: string;
  @Input() wdiNavType: string;
  menus:Menu[];

  constructor(menuService:MenuService) {
    this.menus = menuService.getMenus();
  }

  ngOnInit(): void {
    this.wdiNavType = this.wdiNavType||'horizontal';
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
