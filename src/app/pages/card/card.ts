export class Card {
  id:string;
  title:string='Cartão de Wdison';
  subtitle:string='Entenda';
  message:string;
  obs:string='Obs: Confiança é o que importa.';
  constructor(message:string,obs:string=undefined,title:string=undefined,subtitle:string=undefined){
    this.message = message;
    this.obs = obs||this.obs;
    this.title = title||this.title;
    this.subtitle = subtitle||this.subtitle;
  }
}
