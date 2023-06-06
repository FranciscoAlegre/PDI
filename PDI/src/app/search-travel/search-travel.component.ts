import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Viagem } from '../model/viagem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-travel',
  templateUrl: './search-travel.component.html',
  styleUrls: ['./search-travel.component.css']
})
export class SearchTravelComponent implements OnInit {
  viagemList: any[] = [];
  instituicoes: string[] = [];
  selectedInstituicao: string = '';
  filteredViagemList: any[] = [];

  constructor(public data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.data.getAllViagemList().subscribe((res: any[]) => {
      this.viagemList = res;
      console.log(this.viagemList);
      this.instituicoes = this.getUniqueInstituicoes();
    });
  }

  getUniqueInstituicoes(): string[] {
    const uniqueInstituicoes = [];
    for (const viagem of this.viagemList) {
      if (uniqueInstituicoes.indexOf(viagem.nomeInstituicao) === -1) {
        uniqueInstituicoes.push(viagem.nomeInstituicao);
      }
    }
    return uniqueInstituicoes;
  }

  onInstituicaoChange(): void {
    this.filteredViagemList = this.viagemList.filter(
      (viagem) => viagem.nomeInstituicao === this.selectedInstituicao
    );
  }
  
  
}

