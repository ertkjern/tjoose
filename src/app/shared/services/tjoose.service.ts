import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Tjoose} from '../interfaces/tjoose.interface';
import {Observable} from 'rxjs';
import {take} from 'rxjs/internal/operators';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class TjooseService {

  tjooses: AngularFirestoreDocument<Tjoose>;
  tjoose: Observable<Tjoose>;

  constructor(private afs: AngularFirestore) {
  }

  createANewTjoose(tjoose: Tjoose): Promise<string> {
    return new Promise(resolve =>
      this.generatePin().then(newPin => {
        this.afs.collection('tjooses').doc(newPin).set(tjoose).then(() => {
          resolve(newPin);
        }, () => {
          resolve('ERROR');
        });
      }));
  }

  pinExists(pin): Promise<boolean> {
    return new Promise(resolve => {
      this.afs.firestore.doc('tjooses/' + pin).get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

  getTjoose(pin: string): Observable<Tjoose> {
    this.tjooses = this.afs.doc('tjooses/' + pin);
    return this.tjooses.valueChanges();
  }

  // Needs to check the database if in use already.
  private generatePin(): Promise<string> {
    return new Promise(resolve => {
      const newPin = Math.floor((Math.random() * 100000) + 1).toString(); // Mocked ID
      this.pinExists(newPin).then(result => {
        if (result) {
          this.generatePin();
        } else {
          resolve(newPin);
        }
      });
    });
  }

}
