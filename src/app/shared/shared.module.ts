import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './loading/loading.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {TjooseService} from './services/tjoose.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    LoadingComponent
  ],
  providers: [
    AuthService,
    TjooseService
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule {
}
