import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { SpeechService } from 'src/app/service/speech/speech.service';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'wdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  card: Card;
  public newCard: Card;
  efeito: boolean;
  private continNext:boolean=false;
  private continPrevious:boolean=false;
  private wdiCard: boolean=false;
  private wdiCardInputKey: string='';
  private cards: Card[];
  private index: number;
  cardService: CardService;
  crud: boolean;
  speechText: boolean;
  speechStopToNext: boolean;

  @ViewChild('nextBtnElement') nextElement: ElementRef<HTMLElement>;

  constructor(cardService: CardService,
    private speechService: SpeechService) {
    this.cardService = cardService;
    this.cards = cardService.cards();
    this.index = 0;
    this.card = this.cards[this.index];
    this.prepareCard();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownEvent(event: KeyboardEvent) {
    let _cardInterval = 600;
    if('ArrowRight'==event.key&&!this.continNext && !this.crud){
      this.continNext=true;
      this.continPrevious=false;
      this.next();
      interval(_cardInterval).pipe(takeWhile(()=>this.continNext))
      .subscribe(item=>{
        this.next();
      });

    } else if('ArrowLeft'==event.key&&!this.continPrevious && !this.crud){
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
      this.crud=false;
      this.onWdiCard();
    }else if('ArrowRight'==event.key)
      // this.next();
      this.continNext=false;
    else if('ArrowLeft'==event.key)
      // this.previous();
      this.continPrevious=false;
    else if(event.key!='Control' && !this.crud){
      this.wdiCardInputKey+=event.key.toLowerCase();
      let tamStr = 6;
      if(this.wdiCardInputKey=='wdisons' || (this.wdiCard && this.wdiCardInputKey.substr(4, 3) == 'sss')){
        this.crud=true;
        this.wdiCardInputKey=this.wdiCardInputKey.substr(0, tamStr);
        return;
      }
      if(this.wdiCardInputKey.length>tamStr)this.wdiCardInputKey=this.wdiCardInputKey.substr(this.wdiCardInputKey.length-tamStr);
      if(this.wdiCardInputKey=='wdison'){
        this.efeito=true;
        this.wdiCard=true;
        this.onWdiCard();
      }
    }
    return true;
  }

  ngOnInit(): void {
    let _self = this;
    let timeStopedEvent = new Date().getTime();
    function onSpeechStop(){
      setTimeout(function(){
        if(_self.speechText&&_self.speechStopToNext && (new Date().getTime() - timeStopedEvent) > 600){
          timeStopedEvent = new Date().getTime();
          function randomInt(min:number,max:number){
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          // let rate = randomInt(40, 80);
          let rate = undefined;
          let pitch = randomInt(0, 100);
          _self.speechService.setText(undefined,rate,pitch);
          let el: HTMLElement = _self.nextElement.nativeElement;
          el.click();
          // _self.next();
        }
      },200);
    }
    let param = {id:'speechContainer',text:'Audio configurado!',on:{stop:onSpeechStop}}
    this.speechService.config(param);
  }

  previous() {
    this.index--;
    this.prepareCard();
    if(this.speechText){
      this.speechService.setText(this.card.message);
      this.speechService.stop();
      let _self = this;
      setTimeout(function(){
        _self.speechService.play();
      },10);
    }
  }

  next() {
    this.index++;
    this.prepareCard();
    if(this.speechText){
      this.speechService.setText(this.card.message);
      this.speechService.stop();
      let _self = this;
      setTimeout(function(){
        _self.speechService.play();
      },10);
    }
  }

  audio(){
    this.speechText = !this.speechText;
    if(this.speechText){
      this.speechService.setText(this.card.message);
      this.speechService.play();
    }else{
      this.speechService.stop();
    }
  }

  incluir(){
    this.index = this.cards.length;
    this.card.id = (1+this.index).toString();
    this.cards.push(this.copy(this.card));
    console.log('incluindo card abaixo');
    console.log(this.card);
  }

  atualizar(){
    this.index = this.cards.findIndex(card=>card.id==this.card.id);
    this.cards[this.index]=this.copy(this.card);
    console.log('atualizando card abaixo');
    console.log(this.cards[this.index]);
  }

  salvar(){
    this.cardService.save(this.cards).then(data=>{
      console.log('Salvou '+this.cards.length+' cartões no repositório');
      console.log(data);
    });
  }

  closeCrud(){
    this.crud=false;
  }

  private prepareCard() {
    if (this.index >= this.cards.length) this.index = 0;
    if (this.index < 0) this.index = this.cards.length - 1;
    this.card = this.copy(this.cards[this.index]);
    if(!this.card.id){
      let id=0;
      this.cards.forEach(card=>{card.id=(++id).toString()})
      this.card = this.copy(this.cards[this.index]);
    }
  }

  onWdiCard(){
    this.index = 0;
    if(this.wdiCard){
      this.cardService.efectsCards().then(cards=>{
        this.cards = cards;
        this.prepareCard();
      });
    }else{
      this.cards = this.cardService.cards();
    }
    this.prepareCard();
  }

  copy(card:Card):Card{
    return Object.assign({}, card);
  }
}
