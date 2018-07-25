import { Component } from '@angular/core';
import {routerTransition} from './shared/animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
