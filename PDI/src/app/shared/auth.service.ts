import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: string | null = null;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) {
    this.fireauth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid; // Set the user ID when the user is authenticated
      } else {
        this.userId = null; // Reset the user ID when the user is logged out
      }
    });
  }

  getUserId(): string | null {
    return this.userId;
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['homepage']);
    }, err => {
      alert('Credenciais Erradas');
    });
  }

  registar(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Perfil criado com sucesso');
    });
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    });
  }
  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, you can check if the user's token exists in localStorage
    const token = localStorage.getItem('token');
    return !!token;
  }

  getUserEmail(): Observable<string | null> {
    return this.fireauth.authState.pipe(
      map(user => user ? user.email : null)
    );
  }
}
