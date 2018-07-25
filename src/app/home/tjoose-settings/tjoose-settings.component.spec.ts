import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {TjooseSettingsComponent} from "./tjoose-settings.component";

describe('TjooseSettingsComponent', () => {
  let component: TjooseSettingsComponent;
  let fixture: ComponentFixture<TjooseSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjooseSettingsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjooseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
