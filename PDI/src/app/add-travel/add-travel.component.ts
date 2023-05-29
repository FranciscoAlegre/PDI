import { Component,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Viagem } from '../model/viagem';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit{
 
  viagensList: Viagem[] =[];
  viagensObj : Viagem={
    id: '',
    dataViagem: '',
    contacto: '',
    nomeAluno: '',
    cidadePartida: '',
    nomeInstituicao: ''
  }
  id:string='';
  dataViagem: string='';
  contacto: string='';
  nomeAluno:string='';
  cidadePartida:string='';
  nomeInstituicao:string='';


  constructor(private data:DataService){}

ngOnInit(){
 

}

resetForm(){
  this.id='';
  this.dataViagem='';
  this.contacto='';
  this.nomeAluno='';
  this.cidadePartida='';
  this.nomeInstituicao='';
}

addViagem(){
  if(this.nomeAluno== ''||this.dataViagem== ''||this.cidadePartida== ''||this.nomeInstituicao== '')
  {
  alert('Preenche todos os campos')
  return;}
  
  this.viagensObj.id='';
  this.viagensObj.dataViagem='';
  this.viagensObj.contacto='';
  this.viagensObj.nomeAluno='';
  this.viagensObj.cidadePartida='';
  this.viagensObj.nomeInstituicao='';

  this.data.addViagem(this.viagensObj);
  this.resetForm();
}
deleteViagem(viagem:Viagem){
  if(window.confirm('Deseja apagar a viagem?'))
  this.data.deleteViagem(viagem);
}
}
