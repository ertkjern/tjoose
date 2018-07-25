import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {TjooseSettingsComponent} from './tjoose-settings/tjoose-settings.component';
import {HomeRouterModule} from './home.route';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeRouterModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    TjooseSettingsComponent
  ],
  providers: [],
})
export class HomeModule {
}