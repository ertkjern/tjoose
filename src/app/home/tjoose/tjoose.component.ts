import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Tjoose} from '../../shared/interfaces/tjoose.interface';
import {TjooseService} from '../../shared/services/tjoose.service';

@Component({
  selector: 'app-tjoose',
  templateUrl: 'tjoose.component.html',
  styleUrls: ['tjoose.component.scss']
})
export class TjooseComponent implements OnInit {
  pin: string;
  tjoose: Tjoose;
  showNoValidPinError: boolean;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private tjooseService: TjooseService) {
  }

  ngOnInit() {
    this.pin = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.pin) {
      this.route.navigate(['join']);
    } else {
      this.getTjoose(this.pin);
    }
  }

  private getTjoose(pin: string) {
    this.tjooseService.getTjoose(pin).subscribe(result => {
      this.tjoose = result;
    });
  }

}
