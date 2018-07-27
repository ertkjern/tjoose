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
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TjooseComponent} from './tjoose/tjoose.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeRouterModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    BackComponent,
    JoinTjooseComponent,
    TjooseSettingsComponent,
    TjooseComponent
  ],
  providers: [],
})
export class HomeModule {
}
