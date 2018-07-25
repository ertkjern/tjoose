import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {TjooseSettingsComponent} from './tjoose-settings/tjoose-settings.component';


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
  }
];

export let HomeRouterModule = RouterModule.forRoot(HOME_ROUTES);
