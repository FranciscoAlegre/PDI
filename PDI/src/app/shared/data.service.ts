import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Viagem } from '../model/viagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userId: string | undefined; // Variable to store the user ID

  constructor(
    private angularFirestore: AngularFirestore,
    private fireauth: AngularFireAuth
  ) {
    this.fireauth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid; // Set the user ID when the user is authenticated
      }
    });
  }

  getViagemDoc(id: string | undefined) {
    return this.angularFirestore
      .collection(`/users/${this.userId}/Viagens`) // Retrieve trips under user-specific path
      .doc(id)
      .valueChanges();
  }
  
  getAllViagemList(): Observable<any[]> {
    return this.angularFirestore.collectionGroup('Viagens').valueChanges();
  }
  getViagemList(): Observable<any[]> {
    return this.angularFirestore.collection(`/users/${this.userId}/Viagens`).valueChanges();
  }

  creatViagem(viagem: Viagem) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection(`/users/${this.userId}/Viagens`) // Save trips under user-specific path
        .add(viagem)
        .then(response => {
          console.log(response);
          resolve(response);
        }, error => reject(error));
    });
  }

  deleteViagem(viagem: Viagem) {
    return this.angularFirestore
      .collection(`/users/${this.userId}/Viagens`) // Delete trips under user-specific path
      .doc(viagem.id)
      .delete();
  }
}
