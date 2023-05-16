import { Component,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit{
  registarV: any[]=[];
  registerViagem:any={

    nomeAluno:'',
    cidadePartida:'',
    nomeInstituicao:'',
    dataViagem:''
  }
ngOnInit(){
 

}
onRegisterViagem(){

  this.registarV.push(this.registerViagem);
  localStorage.setItem('registarV',JSON.stringify(this.registarV))
  this.registerViagem ={

    nomeAluno:'',
    cidadePartida:'',
    nomeInstituicao:'',
    dataViagem:''
  }
}
}
