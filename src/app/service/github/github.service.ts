// token:159f2ea63a98ee2d83dc3fd1ff61bf083f7aa5d4
// username:wdison

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import axios from "axios";
import GitHub from 'github-api';

@Injectable({providedIn: 'root',})
export class GitHubService {
  private tmp3='257c2953bc0ac4';
  private tmp1='ca500a1c01803';
  private tmp2='334f29da3a157';
  private github = new GitHub({username:'wdison',password:this.tmp1+this.tmp2+this.tmp3});
  private bagRepo = this.github.getRepo('wdison', 'bag');


  constructor(private httpClient: HttpClient ) { }

  read(fileName:string):Promise<any> {
    let fileNameFull = 'json/'+fileName;
    const promise:Promise<any> = this.bagRepo.getContents('master', fileNameFull);
    return promise.then((valor) => {
      console.log(valor);
      return this.httpClient.get(valor.data.download_url).toPromise();
   });
  }

  write(fileName:string,fileContent:string,commitMsg:string=''){
    let fileNameFull = 'json/'+fileName;
    let initialMessage=commitMsg||'Commit de '+fileNameFull;
    const promise = this.bagRepo.writeFile('master', fileNameFull, fileContent, initialMessage);
    promise.then((valor) => {
      console.log(valor);
    });
    return promise;
  }
}
