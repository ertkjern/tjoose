import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TjooseService} from '../../shared/services/tjoose.service';

@Component({
  selector: 'app-join-tjoose',
  templateUrl: 'join-tjoose.component.html',
  styleUrls: ['join-tjoose.component.scss']
})
export class JoinTjooseComponent implements OnInit {
  pin: string;
  showError: boolean;

  constructor(private router: Router, private tjoose: TjooseService) {
  }

  ngOnInit() {
  }

  joinTjoose() {
    this.showError = false;
    if (this.pin) {
      this.tjoose.pinExists(this.pin).then(result => {
        if (result) {
          this.router.navigate(['tjoose', this.pin]);
        } else {
          this.showError = true;
        }
      });
    } else {
      this.showError = true;
    }
  }


}
