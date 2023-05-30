import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Viagem } from '../model/viagem';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
  viagemList: Viagem[] = [];
  criarViagem: FormGroup;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder
  ) {
    this.criarViagem = this.formBuilder.group({
      id: [''],
      dataViagem: [''],
      contacto: [''],
      nomeAluno: [''],
      cidadePartida: [''],
      nomeInstituicao: [''],
    });
  }

  ngOnInit(): void {
    this.data.getViagemList().subscribe((res: any[]) => {
      this.viagemList = res;
      console.log(this.viagemList);
    });
  }
  

  deleteViagem(viagem: Viagem) {
    if (confirm('Deseja remover a viagem?')) {
      this.data.deleteViagem(viagem);
    }
  }

  onSubmit() {
    // Assign the user ID to the new trip
    this.criarViagem.patchValue({ userId: this.data.userId });

    this.data.creatViagem(this.criarViagem.value);
  }
}
