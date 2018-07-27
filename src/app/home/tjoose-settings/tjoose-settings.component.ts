import {Component, OnInit} from '@angular/core';
import {NumberOfOptions} from '../shared/numberOfOptions.interaface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Tjoose} from '../../shared/interfaces/tjoose.interface';
import {AuthService} from '../../shared/services/auth.service';
import {TjooseService} from '../../shared/services/tjoose.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tjoose-settings',
  templateUrl: 'tjoose-settings.component.html',
  styleUrls: ['tjoose-settings.component.scss']
})
export class TjooseSettingsComponent implements OnInit {

  tjooseSettingsForm: FormGroup;
  isLoading: boolean;
  numberOfoptions: NumberOfOptions[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
  ];
  showError: boolean;

  constructor(private fb: FormBuilder, private auth: AuthService, private tjoose: TjooseService, private router: Router) {
  }

  ngOnInit() {
    this.isLoading = false;
    this.createForm();
  }

  private createForm() {
    this.tjooseSettingsForm = this.fb.group({
      public: [false],
      everyoneCanEdit: [false],
      numberOfOptions: [false]
    });
  }

  createTjoose(data: Tjoose) {
    this.showError = true;
    this.isLoading = true;
    this.auth.anonymusLogin().then(user => {
      data = {
        ...data,
        ownerUid: user.uid
      };
      this.tjoose.createANewTjoose(data).then(result => {
        if (result !== 'ERROR') {
          this.isLoading = false;
          this.router.navigate(['tjoose', result]);
        } else {
          this.showError = true;
        }
      });
    });
  }
}
