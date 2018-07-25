import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {JoinTjooseComponent} from './join-tjoose.component';


describe('TjooseSettingsComponent', () => {
  let component: JoinTjooseComponent;
  let fixture: ComponentFixture<JoinTjooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTjooseComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTjooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
