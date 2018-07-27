import {Component} from '@angular/core';
import {routerTransition} from './shared/animations/router.animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {

  constructor(private router: Router) {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

}
