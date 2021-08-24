import { Injectable } from "@angular/core";


declare interface WdiSpeech{
  pause: () => any;
  stop: () => any;
  resume: () => any;
  play: () => any;
  setText: (text:string) => any;
}

declare interface SpeechParam {
  id?:string;
  el?:any;
  text?: string;
}


declare interface wdi{
  Speech(conf: SpeechParam): WdiSpeech;
}



@Injectable({providedIn: 'root',})
export class SpeechService {
  private wdiSpeech:WdiSpeech;
  constructor() {

  }

  config(param:SpeechParam){
    this.wdiSpeech = window['wdi'].Speech(param);
  }

  pause (){
    return this.wdiSpeech.pause();
  }

  stop (){
    return this.wdiSpeech.stop();
  }

  resume (){
    return this.wdiSpeech.resume();
  }

  play (){
    return this.wdiSpeech.play();
  }

  setText (text:string){
    return this.wdiSpeech.setText(text);
  }
}
