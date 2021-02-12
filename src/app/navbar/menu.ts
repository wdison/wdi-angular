export class Menu {
  name:string;
  tooltip:string;
  link:string;
  subMenus:Menu[];
  constructor(name:string,link:string='',tooltip:string='',subMenus:Menu[]=[]){
    this.name = name;
    this.link = link||name;
    this.tooltip = tooltip||name;
    this.subMenus=subMenus;
  }
}
