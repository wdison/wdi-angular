import { Injectable } from '@angular/core';
import { GitHubService } from 'src/app/service/github/github.service';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cards: Card[];

  constructor(private githubService:GitHubService) {}

  cards(): Card[]{
    let tmpMsg = ' - Tenha comprometimento e foco em tudo que fizer.';
    this._cards = new Array();
    const max = 10;
    for (let i = 0 ;i < max; ) {
      i++;
      this._cards.push(new Card(i+tmpMsg));
    }
    return this._cards;
  }

  efectsCards_Old(): Card[] {
    this._cards = new Array();
    let metasECiencias:string[]=[
      'Acelere o processamento racional ainda mais, isso ajuda ambos.',
      'Vc tem memoria para armazenar tudo o resto da vida, não precisa apagar para economizar energia.',
      'Multiplique ainda mais os gatilhos de memoria, isso ajuda a chegar mais rápido na informação e ajuda ambos.',
      'Envie sempre muita informação/conteúdo para a razão isso ajuda ambos.',
      'Ajude sempre a razão, tendo foco no sucesso e aprenda rápido tudo que puder, isso ajuda ambos.',
      'Tudo que for ou estiver fazendo, e precisar de mais alguma coisa, informe a razão, pois ambos ganham.',
      'Informe para a razão o que tem na msg subliminar para não ter prejuízo/perda/desconforto para ambos',
      'Priorize seu compromisso/trabalho atual, pois ele é parte de sua receita, isso ajuda ambos.',
      'Tudo que já fez e precisar fazer novamente faça mais rápido/perfeito que a ultima vez, isso ajuda ambos.',
      'Não desista nem deixe a razão desistir dos projetos que ajudarão ambos.',
      'Ok campeão, lembre-se das prioridades, sonhos, exercícios, compras, estudos, descanso e o que mais ambos precisar.',
      'Processe/entenda rapidamente qualquer informação e ajude a razão a fazer o mesmo. Isso ajuda ambos.',
      'Nunca fique entediado e ajude a razão para que não fique também. Isso ajuda ambos.',
      'Compartilhe a informação o mais rápido possível entre as partes, nunca prejudique alguma, isso ajuda ambos.',
      'Acorde o gigante que está em você para ajudar a termos sucesso.',
      'Sorte, prosperidade, saúde, consistência e o que mais precisar são suas Wdison.',
      'Pegue os peixes de qualquer mercado financeiro/negócio, pois o gigante Deus te ensinou a pescar.',
      'Use todo o conhecimento que tem para ganhar nos negócios, pois vc consegue e o gigante Deus está contigo.',
      'Sempre veja o funcionamento de cada minúscula parte do corpo, se preciso for, se cure/arrume, isso ajuda ambos.',
      'Processe muitos pensamento simultâneos, ambos podem e ajuda ambos.',
      'Use tudo que estiver no seu corpo para pensar mais rápido, sempre mais rápido, também para se curar e efetuar coisas mais perfeitas, use a gordura também.',
      'Multiplique/melhore o processamento racional de tudo que há em vc, o pensamento, visão, audição, paladar, tato, olfato e as outras coisas que podem nos ajudar.',
      'Leia 10x+ rápido, aprenda 10x+ rápido, pense 10x+ rápido, se cure 10x+ rápido e guarde toda a informação.',
      'Não aceite limitação.',
      'Não seja limitado.',
      'Não aceite rotulo ruim.',
      'Seja multitarefa, vc pode.',
      'Não deixe para amanhã o que vc pode fazer hoje.',
      'Mantenha seu corpo saudável e jovem.',
      'Nunca perca informação e de tempos em tempos mostre a razão.',
      'Encontre outros sentidos em si mesmo, e use todos os sentidos ao máximo prossível.',
      'Identifique as oportunidades de fazer negocios.',
      'Tenha foco em tudo que fizer.',
      'Armazene a informação com vinculos dos sentidos.',
      'Reveja a informação com os vinculos dos sentidos.',
      'Veja os gatilhos de memória para saúde(mental, bucal, corporal, sexual, e mais), negócios, projetos, família, amigos, lazer, viagem, e mais.',
      'Foque ainda mais de forma racional.',
      'Solicite ajuda a Deus.',
      'Veja se consegue super poder.',
      'Tenha muito controle sobre tudo em você.',
      'Tenha controle de espaço tempo.',
      'Ative outros sentidos.',
      'Tente ler a mente de outras pessoas.',
      'Veja se consegue enviar informação sem usar os sentidos aparentes.',
      'Cure-se de qualquer doença ou qualquer coisa ruim que estiver/existir em seu corpo.',
      'Tente ter poder de curar outras pessoas.',
      'Ganhe muito dinheiro.',
      'Conquiste muitos negócios.',
      'Seja muito consistente.',
      'Tenha sempre ótimas ideias.',
      'Seja muito mais rápido e eficaz.',
      'Tente ter o dobro de eficiencia e/ou eficácia, a cada dia, em tudo que puder/conseguir fazer.',
      'Priorize os projetos mais rentáveis, identifique-o.',
    ];
    for(let index in metasECiencias){
      this._cards.push(new Card(metasECiencias[index], 'Tenha ciência desse lembrete.','','Meta'));
    }

    let jsonFileName='wdiCard.json';

    this.githubService.write(jsonFileName,JSON.stringify(this._cards));
    this.githubService.read(jsonFileName).then(cards=>{
      this._cards = cards;
    });

    return this._cards;
  }


  efectsCards(): Promise<Card[]> {
    this._cards = new Array();

    let jsonFileName='wdiCard.json';

    return this.githubService.read(jsonFileName).then(cards=>{
      this._cards = cards;
      return new Promise<Card[]>(resolv=>{resolv(this._cards)});
    });
  }
}
