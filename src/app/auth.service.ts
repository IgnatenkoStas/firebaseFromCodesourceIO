import { User } from './interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _name: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password).then( value => {
      console.log('Login worked!', value);
      let user: User = value.additionalUserInfo?.profile as User;
      this.router.navigateByUrl('/profile');
    }).catch( err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignUp(email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Login Email is succsessful ', value);
      this.router.navigateByUrl('/profile');
    }).catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider).then(value => {
      console.log('Login Google is succsessful'),
      this.router.navigateByUrl('/profile');
      if(value.additionalUserInfo?.profile != null) {
        let user: any = value.additionalUserInfo?.profile;
        console.log(user);
      }
    }).catch(error => {
      console.log('Something went wrong: ', error);
    })
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl('');
    })
  }

  private oAuthLogin(provider: firebase.auth.GoogleAuthProvider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
