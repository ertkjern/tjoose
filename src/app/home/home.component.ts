import {Component, OnInit} from '@angular/core';
import {appearOneByOne} from '../shared/animations/appear-one-by-one.animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  createNewTjoose() {
    this.router.navigate(['create']);
  }

  joinTjoose() {
    this.router.navigate(['join']);
  }
}
