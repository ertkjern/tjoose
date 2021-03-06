import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {TjooseSettingsComponent} from './tjoose-settings/tjoose-settings.component';
import {JoinTjooseComponent} from './join-tjoose/join-tjoose.component';
import {TjooseComponent} from "./tjoose/tjoose.component";


const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'create',
    component: TjooseSettingsComponent,
    data: { state: 'create' }
  },
  {
    path: 'join',
    component: JoinTjooseComponent,
    data: { state: 'join'}
  },
  {
    path: 'tjoose',
    component: TjooseComponent
  },
  {
    path: 'tjoose/:id',
    component: TjooseComponent
  }
];

export let HomeRouterModule = RouterModule.forRoot(HOME_ROUTES);
