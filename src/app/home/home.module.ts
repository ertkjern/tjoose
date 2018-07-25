import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {TjooseSettingsComponent} from './tjoose-settings/tjoose-settings.component';
import {HomeRouterModule} from './home.route';
import {JoinTjooseComponent} from './join-tjoose/join-tjoose.component';
import {BackComponent} from './back/back.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeRouterModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    BackComponent,
    JoinTjooseComponent,
    TjooseSettingsComponent
  ],
  providers: [],
})
export class HomeModule {
}
