import { Injectable } from '@angular/core';
import{AngularFirestore} from'@angular/fire/compat/firestore';
import{AngularFireStorage} from'@angular/fire/compat/storage';
import { Viagem } from '../model/viagem';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestorage:AngularFireStorage,private firestore:AngularFirestore) { }

  addViagem(viagem:Viagem){
   
    viagem.id=this.firestore.createId();
    return this.firestore.collection('/Viagens').add(viagem);
  }

  getViagens(){
    return this.firestore.collection('/Viagens').snapshotChanges();
  }

  deleteViagem(viagem:Viagem){
    return this.firestore.doc('/Viagens/'+viagem.id).delete();
  }
}
