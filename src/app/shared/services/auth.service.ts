import {EventEmitter, Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from 'firebase';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  currentUserId: EventEmitter<string> = new EventEmitter<string>();

  constructor(public afAuth: AngularFireAuth) {
  }

  getCurrentUserId(): Observable<string> {
    return this.currentUserId;

  }

  anonymusLogin(): Promise<User> {
    return new Promise(
      resolve => {
        this.afAuth.auth.signInAnonymously().then(result => {
          this.currentUserId.emit(result.user.uid);
          resolve(result.user);
        });
      });
  }

}
