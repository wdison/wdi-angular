import { Component, HostListener, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'wdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  card: Card;
  efeito: boolean;
  private continNext:boolean=false;
  private continPrevious:boolean=false;
  private wdiCard: boolean=false;
  private wdiCardInputKey: string='';
  private cards: Card[];
  private index: number;
  cardService: CardService;
  constructor(cardService: CardService) {
    this.cardService = cardService;
    this.cards = cardService.cards();
    this.index = 0;
    this.card = this.cards[this.index];
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownEvent(event: KeyboardEvent) {
    let _cardInterval = 600;
    if('ArrowRight'==event.key&&!this.continNext){
      this.continNext=true;
      this.continPrevious=false;
      this.next();
      interval(_cardInterval).pipe(takeWhile(()=>this.continNext))
      .subscribe(item=>{
        this.next();
      });

    } else if('ArrowLeft'==event.key&&!this.continPrevious){
      this.continPrevious=true;
      this.continNext=false;
      this.previous();
      interval(_cardInterval).pipe(takeWhile(()=>this.continPrevious))
      .subscribe(item=>{
        this.previous();
      });
    }
    return true;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.ctrlKey && 'c'==event.key.toLowerCase()){
      this.efeito=false;
      this.wdiCard=false;
      this.onWdiCard();
    }else if('ArrowRight'==event.key)
      // this.next();
      this.continNext=false;
    else if('ArrowLeft'==event.key)
      // this.previous();
      this.continPrevious=false;
    else if(event.key!='Control'){
      this.wdiCardInputKey+=event.key.toLowerCase();
      let tamStr = 6;
      if(this.wdiCardInputKey.length>tamStr)this.wdiCardInputKey=this.wdiCardInputKey.substr(this.wdiCardInputKey.length-tamStr);
      if(this.wdiCardInputKey=='wdison'){
        this.efeito=true;
        this.wdiCard=true;
        this.onWdiCard();
      }
    }
    return true;
  }

  ngOnInit(): void {}

  previous() {
    this.index--;
    this.prepareCard();
  }

  next() {
    this.index++;
    this.prepareCard();
  }

  private prepareCard() {
    if (this.index >= this.cards.length) this.index = 0;
    if (this.index < 0) this.index = this.cards.length - 1;
    this.card = this.cards[this.index];
  }

  onWdiCard(){
    this.index = 0;
    if(this.wdiCard){
      // this.cards = this.cardService.efectsCards_Old();
      this.cardService.efectsCards().then(cards=>{
        this.cards = cards;
        this.prepareCard();
      });
    }else{
      this.cards = this.cardService.cards();
    }
    this.prepareCard();
  }
}
