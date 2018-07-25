import {Component, OnInit} from '@angular/core';
import {NumberOfOptions} from '../shared/numberOfOptions.interaface';

@Component({
  selector: 'app-tjoose-settings',
  templateUrl: 'tjoose-settings.component.html',
  styleUrls: ['tjoose-settings.component.scss']
})
export class TjooseSettingsComponent implements OnInit {

  numberOfoptions: NumberOfOptions[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
