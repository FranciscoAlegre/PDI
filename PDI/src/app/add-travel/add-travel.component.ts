import { Component,OnInit} from '@angular/core';
import { QueryDocumentSnapshot } from 'firebase/firestore';

import { Viagem } from '../model/viagem';
import { DataService } from '../shared/data.service';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit{
  viagemList: any[]=[];
 public criarViagem:FormGroup;
  constructor(public data:DataService,
    public formBuilder:FormBuilder){
      this.criarViagem=this.formBuilder.group({
    
  id:[''],
  dataViagem: [''],
  contacto: [''],
  nomeAluno:[''],
  cidadePartida:[''],
  nomeInstituicao:[''],
      })
    }

    ngOnInit() {
      this.data.getViagemList().subscribe((res: any[]) => {
        this.viagemList = res;
        console.log(this.viagemList);
      });
    }
    
    
    
deleteViagem(Viagem:Viagem){
  if(confirm("Deseja remover a viagem?")){
    this.data.deleteViagem(Viagem);
  }
}
onSubmit(){
  this.data.creatViagem(this.criarViagem.value);

}

}
