import { Injectable } from '@angular/core';
import{AngularFirestore} from'@angular/fire/compat/firestore';
import{AngularFireStorage} from'@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Viagem } from '../model/viagem';
import { Observable } from 'rxjs';
import { getFirestore } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private angularFirestore:AngularFirestore
    ) { }

  getViagemDoc(id: string | undefined){
    return this.angularFirestore
    .collection('/Viagens')
    .doc(id)
    .valueChanges()
  }
  getViagemList(): Observable<any[]> {
    return this.angularFirestore.collection('/Viagens').valueChanges();
  }
  creatViagem(Viagem:Viagem){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore
      .collection('/Viagens')
      .add(Viagem)
      .then(response => {console.log(response)},error=>reject(error));
      })
  }
  deleteViagem(Viagem: Viagem){
    return this.angularFirestore
    .collection('/Viagens')
    .doc(Viagem.id)
    .delete()
  }
}
