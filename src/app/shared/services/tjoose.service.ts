import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Tjoose} from '../interfaces/tjoose.interface';
import {Observable} from 'rxjs';
import {take} from 'rxjs/internal/operators';

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

  getTjoose(pin: string): Observable<Tjoose> {
    this.tjooses = this.afs.doc('tjooses/' + pin);
    return this.tjooses.valueChanges();
  }

  // Needs to check the database if in use already.
  private generatePin(): Promise<string> {
    return new Promise(resolve => {
      const newPin = Math.floor((Math.random() * 100000) + 1).toString(); // Mocked ID
      this.afs.firestore.doc('tjooses/' + newPin).get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            this.generatePin();
          } else {
            resolve(newPin);
          }
        });
    });
  }

}

/**

 this.shirts = this.shirtCollection.snapshotChanges().pipe(
 map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Shirt;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
 );

 */
